export const MultilineBashExample1Src = `\`\`\`
ls -lah
cd ~
pwd
whoami
\`\`\`;`;

export const MultilineBashExample2Src = `\`\`\`
files=$(ls -lah)

echo "$files" | while read -r line; do
    # Skip the header
    if [[ "$line" =~ ^total ]]; then
        continue
    fi

    permissions=$(echo "$line" | awk '{print $1}')
    filename=$(echo "$line" | awk '{print $9}')

    echo "Permissions: $permissions - File: $filename"
done
\`\`\`;`;
