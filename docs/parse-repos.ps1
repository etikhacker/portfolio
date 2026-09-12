$jsonlPath = "C:\Users\User\.minimax\v2\sessions\2026\09\10\20-56-58-372-session_bXZzXzUwN2M4MjNjODU1YTRkYmViZmZmZDE1OTA2ZDEyMmZi\reports\tool-outputs\0c34ad426cba2e54787fda96-b6dfc49972270b2c5ec8bb12d4aa4a4449e5b546dcd592b0cb12052184d50c21.readable.v1.jsonl"
$out = "D:\portfolio\docs\repos-summary.json"

# Concatenate all chunk text fields in order
$lines = Get-Content -LiteralPath $jsonlPath -Encoding UTF8
$full = ""
foreach ($line in $lines) {
    try {
        $obj = $line | ConvertFrom-Json -ErrorAction Stop
        if ($obj.type -eq "chunk") {
            $full += $obj.text
        }
    } catch { }
}

# Save the merged JSON array
$full | Out-File -LiteralPath $out -Encoding UTF8 -NoNewline

# Parse and summarize
$repos = $full | ConvertFrom-Json
$result = $repos | ForEach-Object {
    [PSCustomObject]@{
        Name        = $_.name
        FullName    = $_.full_name
        Description = $_.description
        Language    = $_.language
        Stars       = $_.stargazers_count
        Forks       = $_.forks_count
        Homepage    = $_.homepage
        HtmlUrl     = $_.html_url
        Updated     = $_.updated_at
        Topics      = ($_.topics -join ",")
        Size        = $_.size
    }
}

$result | Sort-Object Stars -Descending | Format-Table -AutoSize | Out-String -Width 200
$result | ConvertTo-Json -Depth 3 | Out-File "D:\portfolio\docs\repos-clean.json" -Encoding UTF8
