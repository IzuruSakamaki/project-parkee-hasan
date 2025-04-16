#!/bin/bash

update_system() {
    log_file="update_$(date +%Y%m%d_%H%M%S).log"
    if command -v apt &> /dev/null; then
        sudo apt update && sudo apt upgrade -y | tee "$log_file"
    elif command -v yum &> /dev/null; then
        sudo yum update -y | tee "$log_file"
    else
        echo "Package manager tidak ditemukan." >> "$log_file"
    fi
}

update_system