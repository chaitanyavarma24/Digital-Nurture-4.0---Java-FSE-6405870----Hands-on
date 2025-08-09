# Git Hands-on Lab – GitDemo

## Objective
This lab demonstrates the use of basic Git commands and integration with GitLab, along with setting up Notepad++ as the default Git editor.

## Step 1: Setup Git Configuration

# Check Git Installation
git --version

# Configure Username and Email
git config --global user.name "Chaitanya"
git config --global user.email "chaitanyavarmalanke0.0@gmail.com"

# Verify Configuration
git config --list

# Create GitLab Repository
# - Created a project named GitDemo on GitLab.
# - Default branch set to main.

## Step 2: Integrate Notepad++ with Git

# Verify Notepad++ Opens from Git Bash
notepad++

# Set Notepad++ as Default Git Editor
git config --global core.editor "notepad++ -multiInst -nosession"

# Verify Notepad++ as editor
git config --global -e

(output/notepad++.png)

## Step 3: Create and Add a File to Git Repository

# Initialize Repository
mkdir GitDemo
cd GitDemo
git init -b main

# Create File
echo "Hello GitLab!" > welcome.txt

# Check Status
git status

# Stage File
git add welcome.txt

# Commit File
git commit -m "First commit: added welcome.txt"

## Step 4: Connect to GitLab and Push

# Add Remote Repository
git remote add origin https://gitlab.com/chaitanya-demo/gitdemo.git

# Verify Remote
git remote -v

# Push to Main
git push -u origin main

## Step 5: Outcome
# - Local repository linked with GitLab.
# - File welcome.txt visible in main branch on GitLab.
# - Notepad++ integrated as Git default editor.
