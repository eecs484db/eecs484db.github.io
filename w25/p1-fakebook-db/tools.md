---
layout: spec
title: tools
permalink: /f24/tools.html
defaultCodeblockVariant: no-line-numbers
---

# Tools

This document houses the tools necessary to succeed in EECS 484. You will explore most of these in Project 1 (before starting [Part 2](p1-fakebook-db#part-2-creating-the-data-tables)), and you can refer back to this document as a refresher for Projects 2 and 3.

# CAEN

To connect to CAEN remotely and to use SQL\*Plus, you will need to

-   sync your files between your local machine (to submit to the Autograder) and a CAEN machine (for SQL\*Plus testing), and
-   ssh into a CAEN Linux machine to run your files

Many of you have visited the tutorial at [EECS 280 Setup Tutorial][eecs-280-setup]. You are free to use any setup that has worked in the past for you, but **remember that running your scripts on CAEN will produce more helpful error descriptions than the ones provided by the Autograder.** We’ve summarized the most common options below.

<div class="primer-spec-callout warning" markdown="1">
**It is your responsibility to ensure you have access well before any deadlines.** It may take staff several hours or days to help debug machine-specific workflows. For this reason, we recommend starting with the most familiar approach (command line `ssh` and `git`) before trying out `rsync`, Visual Studio Code, or other options.
</div>

## Option 1 (Terminal)

The first option is to do all your development on your local machine, but periodically copy your files to CAEN for testing through the terminal.

-   You can use `git` version control (see [EECS 485 Git Tutorial][eecs-485-git]), which has the benefit of keeping track of your files over time.
-   For a faster approach, you can copy your local files to CAEN with the `rsync` command (omit angle brackets).

```console
$ rsync -rtv <local_folder> <uniqname>@login.engin.umich.edu:<remote_folder>
```

Now that your files are on CAEN, to ssh into it, run

```console
$ ssh <uniqname>@login.engin.umich.edu
```

<div class="primer-spec-callout info" markdown="1">
  _**Pro tip:**_ If you wish to copy your files from CAEN to your local machine, you can switch the source and destination paths.
</div>

## Option 2 (Visual Studio Code)

The second option is to utilize Visual Studio Code’s ssh extension to do your development on a CAEN machine and periodically sync your files back to your local machine with Git/`rsync`. This might be a better option if you want to test your scripts frequently without having to sync often. It can, however, take longer to debug machine-specific issues.

First, in Visual Studio Code, download the _Remote - SSH_ extension. Open Command Palette, select the option _Remote-SSH: Open SSH Configuration File..._, and select the first configuration file in the list. For MacOS users, this should open the `~/.ssh/config` file. 

Add the following to the bottom of the file (omit angle brackets):

```
# CAEN
Host caen
    Hostname login.engin.umich.edu
    User <uniqname>
    ControlPersist 1h
```

Next, under the extension settings for _Remote - SSH_, check the option to _Lockfiles in Tmp_. 

Open Command Palette, select the option _Connect Current Window to Host..._ and choose `caen`. After entering your CAEN password and Duo authorization, you should now be able to edit your files directly on CAEN with Visual Studio Code as a text editor.

<div class="primer-spec-callout info" markdown="1">
_**Pro tip:**_ If you were able to successfully connect to CAEN once, but it fails the next time you try to connect, try killing the connection first and waiting for the log notification to confirm that it was killed. To do so, open Command Palette and select the option _Remote - SSH: Kill VS Code Server on Host_. Alternatively, ssh into CAEN and remove the `.vscode` directory with `rm -rf .vscode`.
</div>

## Windows Users

For Windows users, we recommend using WSL as shown on the [EECS 280 website][eecs-280-windows] and following the same steps as Linux/MacOS users. You can, however, use tools like PuTTY, WinSCP, or Cyberduck to ssh into CAEN and sync your files.

# Class Modules

On CAEN, in order to use SQL\*Plus (Projects 1-3), you will need to load the class module by running `module load eecs484` every time you open a new terminal session. If you forget to load the module, you will encounter the error `ORA-12162: TNS:net service name is incorrectly specified` when you login to SQL\*Plus.

On CAEN, in order to use the `mongo` shell (Project 3), you will need to load the mongoDB module by running `module load mongodb` every time you open a new terminal session.

<div class="primer-spec-callout info" markdown="1">
_**Pro tip:** To automatically load all modules every time you login, run the following on CAEN. You only need to do this once at the beginning of the semester._

```console
$ echo "module load eecs484" >> ~/.bash_profile
$ echo "module load mongodb" >> ~/.bash_profile
```
</div>

# SQL\*Plus Login

For Project 1 (accessing the public data set and testing scripts) and Project 2-3 (viewing database tables), you will be using a command line interface (CLI) from Oracle called SQL\*Plus.

A SQL\*Plus account has already been set up for you by the staff. To access your SQL\*Plus account, you must be on a CAEN Linux machine (see [CAEN](#caen)). To start SQL\*Plus, run

```console
$ rlwrap sqlplus
```

Your username is your University of Michigan uniqname, and your password is `eecsclass` (case-sensitive). The first time you log in, the system will prompt you to change your password, which we recommend you do.

<div class="primer-spec-callout danger" markdown="1">
Only use alphabetic characters, numerals, the underscore, and the pound sign in your SQL\*Plus password. **Never use quotation marks, the '@' symbol, or the '$' symbol in your SQL\*Plus password**. If you do, it is likely that you will not be able to log into your account, and you will need to reset it (see [Resetting Password and Sessions](#resetting-password-and-sessions)).
</div>

If you encounter the error `ORA-01017: invalid username/password; logon denied`, then you may not have an account. Please privately post on Piazza with your uniqname to request access.

## Resetting Password, unlocking Oracle Account, and killing Sessions

We have made an [Autograder][autograder] project named SQL\*Plus Reset that would allow you to reset your SQL\*Plus password, unlock Oracle account, or kill your SQL\*Plus sessions.

To reset your password to `eecsclass`, submit any text file named `password.txt` to this project.

To unlock your Oracle account, submit any text file named `unlock.txt` to this project.

To kill all your SQL\*Plus sessions and fix the `ORA-00054: resource busy and acquire with NOWAIT specified or timeout expired` error, submit any text file named `sessions.txt` to this project.

If you still have issues accessing your SQL\*Plus account after trying the solutions above, please privately post on Piazza with your uniqname and we can take a look. Keep in mind that this may take several hours, during which you will be unable to use SQL\*Plus to work on the project.

# Helpful SQL\*Plus Commands

Once in SQL\*Plus, you can execute arbitrary SQL commands. You will notice that the formatting of output from SQL\*Plus can be less than ideal. Here are some commands to access metadata and make the output more readable. 

**Remember that SQL commands are case-insensitive but must end in a semicolon.** SQL\*Plus (not SQL) commands like `DESC` and `@createTables` do not need to end in a semicolon. SQL\*Plus can also execute multi-line commands if you click the <kbd>Enter</kbd> key between lines (you will see line numbers show up). As always, omit angle brackets:

-   To view all of your tables, run:
    ```console?lang=bash&prompt=SQL>
    SQL> SELECT table_name FROM user_tables;
    ```
-   To view all of your views, run:
    ```console?lang=bash&prompt=SQL>
    SQL> SELECT view_name FROM user_views;
    ```
-   To view all of your sequences, run:
    ```console?lang=bash&prompt=SQL>
    SQL> SELECT sequence_name FROM user_sequences;
    ```
-   To view all of your triggers, run:
    ```console?lang=bash&prompt=SQL>
    SQL> SELECT trigger_name FROM user_triggers;
    ```
-   To view the full schema of any table, including the tables of the public dataset, run:
    ```console?lang=bash&prompt=SQL>
    SQL> DESC <table name>;
    ```
-   To set the width for a character column to `num chars`, run:
    ```console?lang=bash&prompt=SQL>
    SQL> COLUMN <column name> FORMAT A<num chars>;
    ```
    To set the width for a number column to (for example) 3 digits, run:
    ```console?lang=bash&prompt=SQL>
    SQL> COLUMN <column name> FORMAT 999;
    ```
-   To remove the formatting from a column, run:
    ```console?lang=bash&prompt=SQL>
    SQL> COLUMN column_name CLEAR;
    ```
    and to remove the formatting from all columns, run:
    ```console?lang=bash&prompt=SQL>
    SQL> CLEAR COLUMNS;
    ```
-   To change the number of characters displayed on a single line from the default of 100, run:
    ```console?lang=bash&prompt=SQL>
    SQL> SET LINE <num chars>;
    ```
-   To select on the first several rows from a table you can use the ROWNUM pseudocolumn, such as:
    ```console?lang=bash&prompt=SQL>
    SQL> SELECT * FROM <table name> WHERE ROWNUM < <num>;
    ```
-   To load commands in SQL\*Plus from a file, say `createTables.sql`, run the following. The name of the file is relative to the current directory from which `sqlplus` was launched:
    ```console?lang=bash&prompt=SQL>
    SQL> @createTables.sql
    ```
    or
    ```console?lang=bash&prompt=SQL>
    SQL> @createTables
    ```
-   To quit SQL\*Plus, press <kbd>Ctrl+D</kbd> or run:
    ```console?lang=bash&prompt=SQL>
    SQL> QUIT
    ```

# SQL\*Plus Potholes

SQL\*Plus is a raw command line tool that can be picky about the formatting of your scripts. Some common errors include:

-   Blank lines inside of a command will cancel the command.

    ```sql
    SELECT *
    FROM table_name;
    ```
    {: data-title="Succeeds:" }

    ```sql
    SELECT *
     
    FROM table_name;
    ```
    {: data-title="Fails:" }

-   Begin multiline comment symbol `/*` must have a space right afterwards.

    ```sql
    SELECT * FROM table_name;
    /* this is a good multiline
    comment block*/
    ```
    {: data-title="Succeeds:" }

    ```sql
    SELECT * FROM table_name;
    /*this is a bad multiline
    comment block*/
    ```
    {: data-title="Fails:" }

-   Comments should not come right after the semicolon.

    ```sql
    SELECT * FROM table_name;
    -- this is a good single line comment
    SELECT * FROM table_name;
    /* this is a good single line comment*/
    ```
    {: data-title="Succeeds:" }

    ```sql
    SELECT * FROM table_name; -- this is a bad single line comment
    SELECT * FROM table_name; /* this is a bad single line comment*/
    ```
    {: data-title="Fails:" }

# Acknowledgements

This document was written and revised over the years by EECS 484 staff at the University of Michigan. The most recent version was updated and moved to [Primer Spec][primer-spec] by Owen Pang.

This document is licensed under a [Creative Commons Attribution-NonCommercial 4.0 International License][cc-license]. You may share and adapt this document, but not for commercial purposes. You may not share source code included in this document.

[eecs-280-setup]: https://eecs280staff.github.io/tutorials/setup_caen.html
[eecs-485-git]: https://eecs485staff.github.io/p1-insta485-static/setup_git.html
[eecs-280-windows]: https://eecs280staff.github.io/p1-stats/setup_wsl.html
[autograder]: https://autograder.io/
[primer-spec]: https://eecs485staff.github.io/primer-spec/
[cc-license]: https://creativecommons.org/licenses/by-nc/4.0/
