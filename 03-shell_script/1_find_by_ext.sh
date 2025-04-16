#!/bin/bash

find_by_ext() {
    dir="$1"
    ext="$2"
    echo "Mencari file dengan ekstensi .$ext di direktori $dir"
    find "$dir" -type f -name "*.$ext"
}

find_by_ext "$1" "$2"