import re

with open('js/dictionary.js', 'r', encoding='utf-8') as f:
    text = f.read()

pattern = re.compile(
    r'\{\s*word:\s*"([^"]+)",\s*ipa:\s*"([^"]+)",\s*pos:\s*"([^"]+)",\s*uz:\s*"([^"]+)",\s*shortDef:\s*"([^"]+)",\s*category:\s*"([^"]+)",\s*example:\s*"([^"]+)",\s*exampleUz:\s*"([^"]+)",\s*synonyms:\s*\[(.*?)\]\s*\}',
    re.DOTALL
)

matches = pattern.findall(text)
print(f"Extracted {len(matches)} words from existing dictionary.")
