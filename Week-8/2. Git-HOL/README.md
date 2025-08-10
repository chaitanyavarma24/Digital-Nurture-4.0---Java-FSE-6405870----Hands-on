# Git Hands-on Lab 2 – Using .gitignore

## Objective
This lab demonstrates how to use `.gitignore` in Git to exclude unwanted files and folders from being tracked.

---

## Step 1: Prerequisites
- Git environment already set up.
- Notepad++ integrated as Git default editor.
- A local Git repository linked to a remote GitLab repository.

---

## Step 2: Create Files and Folders to Ignore

# Create a .log file
echo "This is a log file" > debug.log

# Create a logs folder and add a file
mkdir logs
echo "Sample log entry" > logs/error.log

[Place Screenshot Here: Creating files and folder]

(output/log-file.png)
---

## Step 3: Create .gitignore File

# Open .gitignore in Notepad++
notepad++ .gitignore

# Add the following lines:
*.log
logs/

This means:
- Ignore all files ending in .log.
- Ignore the entire logs folder and its contents.

[Place Screenshot Here: Editing .gitignore]
(output/gitignore.png)
---

## Step 4: Verify .gitignore Works

# Check repository status
git status

Expected output:
- .gitignore appears as untracked.
- debug.log and logs/ folder are not listed.

[Place Screenshot Here: git status output]


(output/git-status.png)
---

## Step 5: Commit and Push .gitignore

# Stage the .gitignore file
git add .gitignore


# Commit the change
git commit -m "Added .gitignore to ignore log files and logs folder"

# Push to GitLab
git push

[Place Screenshot Here: Pushing .gitignore]

(output/git-push.png)
---

## Step 6: Outcome
- .gitignore is present in the repository.
- debug.log and logs/ folder are excluded from Git tracking.
- Changes successfully pushed to GitLab.

[Place Screenshot Here: GitLab view of repo]


(output/gitlab.png)
---

## Author
Chaitanya Varma Lanke
