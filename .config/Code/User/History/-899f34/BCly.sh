#!/bin/sh
greetings=("Hello Yarych" "Wassupp myman" "Welcome" "Feeling good?" "Добрий день" "Здоров Панас" "Let's do some coding" "Ure ure ure" "Touch some grass" "Get a job" "Omae wa mu sindeiru" "Get a life" "Nice weather innit?" "Доброго здоров'я" "Слава Ісусу Христу" "Люблю тебе" "Здоров" "Хелоу" "Hello" "Greetings" "Go hard or go home" "Let's do it")

# Get the number of elements in the array
num_greets=${#greetings[@]}
echo "$num_greets"

# Generate a random index between 0 and the last index of the array
random_index=$((RANDOM % num_greets))

greeting=${greetings[$random_index]}

echo "$greeting"
sed -i  "s/^.*HeaderText=.*$/HeaderText=${greeting}/" /home/yaros/shared/Projects/sddm-sugar-dark/theme.conf

