#!/bin/bash

generate_ssh_key() {
    target_dir="$1"
    mkdir -p "$target_dir"
    ssh-keygen -t rsa -b 4096 -f "$target_dir/id_rsa" -N ""
    echo "SSH key disimpan di $target_dir"
}

generate_ssh_key "$1"