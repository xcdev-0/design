#!/bin/bash

cd "/Users/dmswjd/Desktop/html/my-portfolio/public/assets/detail_page/daeryong"

start=421
end=436
index=1

for ((num=$start; num<=$end; num++)); do
  mv "Frame $num.png" "daeryong_${index}.png"
  ((index++))
done

echo "daeryong 파일명 변경 완료!"