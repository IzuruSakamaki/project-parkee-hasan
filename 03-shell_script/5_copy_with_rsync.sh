#!/bin/bash

copy_with_rsync() {
    src="$1"
    user="$2"
    ip="$3"
    rsync -avz "$src" "$user@$ip:~/"
}

copy_with_rsync "$1" "$2" "$3"