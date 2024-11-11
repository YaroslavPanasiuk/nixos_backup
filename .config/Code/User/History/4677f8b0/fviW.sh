#!/bin/sh
readarray -t my_list < <(ps aux | grep post_setting.sh | awk '{print $2}')

# Loop through the array
for line in "${my_list[@]}"; do
  kill "$line"
done

