$jsonlPath = "C:\Users\User\.minimax\v2\sessions\2026\09\10\20-56-58-372-session_bXZzXzUwN2M4MjNjODU1YTRkYmViZmZmZDE1OTA2ZDEyMmZi\reports\tool-outputs\0c34ad426cba2e54787fda96-b6dfc49972270b2c5ec8bb12d4aa4a4449e5b546dcd592b0cb12052184d50c21.readable.v1.jsonl"

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

# Save the merged JSON array as raw text
[System.IO.File]::WriteAllText("D:\portfolio\docs\repos-raw.json", $full, [System.Text.Encoding]::UTF8)

# Try parsing
try {
    $repos = $full | ConvertFrom-Json -ErrorAction Stop
    Write-Host "Parsed $($repos.Count) repos"
} catch {
    Write-Host "Parse error: $($_.Exception.Message)"
    # Maybe the JSON has trailing newlines or BOM
    $clean = $full.Trim()
    try {
        $repos = $clean | ConvertFrom-Json
        Write-Host "Parsed after trim: $($repos.Count) repos"
    } catch {
        Write-Host "Still failed: $($_.Exception.Message)"
        exit 1
    }
}

$repos | ForEach-Object {
    [PSCustomObject]@{
        Name        = $_.name
        Description = $_.description
        Language    = $_.language
        Stars       = $_.stargazers_count
        Size        = $_.size
        Homepage    = $_.homepage
        HtmlUrl     = $_.html_url
        Updated     = $_.updated_at
        Pushed      = $_.pushed_at
    }
} | Sort-Object Updated -Descending | Format-Table -AutoSize | Out-String -Width 200
