#!/bin/sh
greetings=("Hello Yarych" "Wassupp myman" "Welcome" "Feeling good?" "Добрий день" "Здоров Панас" "Let's do some coding" "Ure ure ure")

# Get the number of elements in the array
num_greets=${#fruits[@]}

# Generate a random index between 0 and the last index of the array
random_index=$((RANDOM % num_greets))

greeting=${greetings[$random_index]}

echo $greeting"
