#!/usr/bin/env bash
# Yu Academy - Ishga tushirish skripti

PORT=8080
DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

echo "=========================================================="
echo "🚀 Yu Academy - SAT, IELTS & CEFR Ta'lim Platformasi"
echo "=========================================================="
echo "Lokal server ishga tushmoqda: http://localhost:$PORT"
echo "Brauzerda to'g'ridan-to'g'ri ochish: file://$DIR/index.html"
echo "To'xtatish uchun: Ctrl + C bosing."
echo "=========================================================="

# Try opening in browser
if command -v open >/dev/null 2>&1; then
  # Mac
  open "file://$DIR/index.html"
elif command -v xdg-open >/dev/null 2>&1; then
  # Linux
  xdg-open "file://$DIR/index.html"
fi

# Run Ruby built-in HTTP server if available
if command -v ruby >/dev/null 2>&1; then
  cd "$DIR" && ruby -run -ehttpd . -p"$PORT"
else
  echo "Sayt brauzeringizda to'g'ridan-to'g'ri ochildi!"
fi
