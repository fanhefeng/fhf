# SET UP SSH FOR YOUR GITHUB ACCOUNT

Git SSH Authentication on macOS

How to set up SSH on your Github account and save credentials locally to enable git operations from terminal
-- by Peter D Lee, CFA Jul 21, 2021

> This article is for macOS users.

In this article, I will walk you through how to set up SSH on your mac to connect to your Github account. It is actually quite simple! Here are the steps for setting up SSH for Git operations:

1. Generate a new SSH key on your computer (or use an existing SSH key)

2. Add the SSH key to the ssh-agent

3. Add the SSH key to your Github account

> As of August 13, 2021, Github stopped supporting users from using account passwords to carry out any authenticated Git operations.

You will have to set up a token-based authentication method to be able to implement Git operations and connect to your Github account on your local machine — using SSH is one method.

Now, let’s dive into the details! To start off, if you already have an existing SSH key on your computer, you can use that key to connect to your Github account, instead of generating a new SSH key.

If you already have an existing key and want to use this key to connect to your Github account, you can go straight to step 2: Add the SSH key to the ssh-agent.

If you don’t have an existing key or want to use a new key just for your Gihub account, you can scroll down to step 1: Generate an SSH key on your computer.

[Optional] Check for any existing SSH key & A brief refresher on SSH keys (skip this step if you want)

To check if you have an existing SSH key, type in the following command in your terminal:

```bash
ls -al ~/.ssh
```

If you do have one or more existing SSH keys, they will be stored inside the .ssh folder in your root directory, e.g. like below:

```bash
id_rsa
id_rsa.pub
id_ed25519
id_ed25519.pub
```

Notice, that each SSH key is in pairs of private & public keys. The private key is the one you should never share with anyone but just keep in your local machine. The public key is the one you will be adding to your Github account.

- id_rsa is a private key
- id_rsa.pub is a public key

Also notice, that you can have more than one SSH key pair on your computer. This also means that even if you already have an existing SSH key, you can generate a new one to use just for the purpose of connecting to your Github account.

In such case, when you generate a new SSH key, you can name the new key to better identify its particular use, e.g. as follows:

```bash
id_rsa_github
id_rsa_github.pub
```

You might have noticed the different keywords in the names of the SSH key files: e.g. `rsa` and `ed25519` in the above examples. These represent the type of encryption algorithm used for the SSH key. It is widely recommended (also by Github) that you use ed25519 encryption for your SSH keys. Now, if you don’t already have an SSH key, let’s generate a new key!

## 1. Generate an SSH key on your computer

Follow the below steps to generate a new SSH key:

### 1. Open the terminal

### 2. Enter the following command:

```bash
ssh-keygen -t ed25519 -C "your_email@example.com"
```

- replace your_email@example.com with your Github account email
- `-C` flag sets a comment or label for identifying your SSH key, and using your email as the comment is a common practice
- `-t ed25519` sets the encryption algorithm for your SSH key to ed25519

### 3. Enter the path with filename in which to save the key

When you get the following prompt:

```bash
>Generating public/private ed25519 key pair.
>Enter a file in which to save the key (/Users/you/.ssh/id_ed25519):
```

- If you just press enter, your new SSH key pair will be saved in the default location (/.ssh) with the default name (id_ed25519) as indicated inside the parenthesis of the prompt
- If you want to save your new SSH key pair with a different name, you can copy what is inside the parenthesis (Users/you/.ssh/id_ed25519) and replace the name part with the name you want, e.g. as below:

```bash
>Generating public/private ed25519 key pair.
>Enter a file in which to save the key (/Users/you/.ssh/id_ed25519):
/Users/you/.ssh/id_ed25519_github
```

If you get an error that says the `/.ssh` directory does not exist, you might have to manually create the `/.ssh` directory inside your root directory. The `/.ssh` folder is automatically generated when you first run the ssh command, but if you have never done so, you can create it manually:

```bash
mkdir ~/.ssh
```

### 4. Enter a passphrase for your key [optional]

When you get the following prompt:

```bash
>Enter passphrase (empty for no passphrase):
```

- Just press enter to generate the SSH key without a passphrase
- Or enter a passphrase for an added layer of security
  Upon pressing enter, you will get a prompt that indicates where your private key (identification) and public key have been saved, what your key fingerprint is, and a randomart image for your key.

You have successfully generated a new SSH key! If you take a look inside your `/.ssh` directory, you should see the following:

```bash
id_ed25519_github
id_ed25519_github.pub
```

## 2. Add the SSH key to the ssh-agent

To connect to a remote server (Github, in our case) using SSH, we need to first add the SSH key to the ssh-agent.

### 1. Start the ssh-agent in the background:

```bash
eval "$(ssh-agent -s)"
```

(or)

```bash
exec ssh-agent zsh
```

Replace `zsh` with `bash` or whichever shell you are using.

### 2. Add your SSH private key to the ssh-agent

```bash
ssh-add --apple-use-keychain ~/.ssh/id_ed25519_github
```

- Make sure to use the default macOS ssh-add command, as opposed to one installed by an external source (e.g. homebrew), if any
- `--apple-use-keychain` flag is Apple’s standard version of `ssh-add` . This adds the passphrase of your SSH key automatically to the keychain so that you don’t have to enter the passphrase every time you make an SSH connection (previously, the flag was `-K`)
- If you have not set a passphrase for your key, you can omit the `--apple-use-keychain` flag
- Replace `id_ed25519_github` with the name of your own SSH key

### 3. Set up the config file for some convenient options

You can set up a config file for SSH with various options. For our purposes, let’s take a look at two options that will be useful:

- Automatically add your SSH key to the ssh-agent
- Store your passphrase in the keychain

If you don’t already have the `config` file inside your `/.ssh` folder, create one:

```bash
touch ~/.ssh/config
```

Then, open the `config` file and paste the following:

```bash
Host *
  AddKeysToAgent yes
  UseKeychain yes
  IdentityFile ~/.ssh/id_ed25519_github
```

Replace the SSH key name (`id_ed25519_github`) as needed

## 3. Add the SSH key to your Github account

The final step is to add the SSH key to your Github account.

### 1. Copy the content of your SSH public key

```bash
pbcopy < ~/.ssh/id_ed25519_github.pub
```

(or) Simply open the `id_ed25519_github.pub` file and copy the entire content.

### 2. Go to Github.com and add the copied public key content in your account settings

- Click your avatar in the upper-right corner > In the dropdown menu, click ‘Settings’
- In the user settings sidebar on the left side of the page, click ‘SSH and GPG keys’
- Click the green ‘New SSH key’ button
- In the ‘Title’ field, enter a descriptive name for your key (e.g. personal MacBook Pro)
- In the ‘Key’ field, paste the copied content of your SSH public key.
- Click ‘Add SSH key’ button
- When prompted, enter your Github account password to confirm.

You have successfully added your SSH key to your Github account! Now you can use SSH to connect to your Github account and do any authentication-required Git operation on your local machine.

## Test your SSH connection

Now, let’s test if our SSH connection to Github works! When you first try to make an SSH connection to Github, for example, when you first git clone your GitHub repo, you may get a prompt like below:

```bash
>The authenticity of host 'github.com (IP ADDRESS)' can't be established.
>RSA key fingerprint is SHA256:nThbg6kXUpJWGl7E1IGOCspRomTxdCARLviKw6E5SY8.
>Are you sure you want to continue connecting (yes/no)?
```

This occurs because to make an SSH connection to a remote host (Github, in our case), that host must be a known host. Make sure the key fingerprint matches Github’s RSA public key fingerprint and then enter ‘yes’ — this will add Github as a known host in the `known_hosts` file in the `/.ssh` folder. Now you will be able to successfully make the connection!
