# EECS 484 Projects

![current semester](https://img.shields.io/badge/current%20semester-wn23-blueviolet)
[![pages-build-deployment](https://github.com/eecs484db/eecs484db.github.io/actions/workflows/pages/pages-build-deployment/badge.svg)](https://github.com/eecs484db/eecs484db.github.io/actions/workflows/pages/pages-build-deployment)
[![powered by Jekyll](https://img.shields.io/badge/powered%20by-Jekyll-blue)](https://jekyllrb.com/)
[![theme Primer Spec](https://img.shields.io/badge/theme-Primer%20Spec-blue)](https://github.com/eecs485staff/primer-spec)
[![MIT license](https://img.shields.io/github/license/eecs484db/eecs484db.github.io?color=blue)](https://github.com/eecs484db/eecs484db.github.io/blob/main/LICENSE.md)


This site [eecs484db.github.io](https://eecs484db.github.io/) holds the project specs for EECS 484 (Database Management Systems) at the University of Michigan. It holds the specs for the current semester as well as an archive for past semesters. This was made possible by EECS 485's [Primer Spec](https://github.com/eecs485staff/primer-spec) Jekyll theme. 

## Prerequisites (MacOS)

Update Homebrew

```
brew update && brew upgrade && brew cleanup
```

Install `chruby` and `ruby-install` with Homebrew. Then, install `ruby`.

```
brew install chruby ruby-install
ruby-install ruby 3.1.3
```

Configure your shell to automatically use `chruby`

```
echo "## Chruby ##" >> ~/.zshrc
echo "source $(brew --prefix)/opt/chruby/share/chruby/chruby.sh" >> ~/.zshrc
echo "source $(brew --prefix)/opt/chruby/share/chruby/auto.sh" >> ~/.zshrc
echo "chruby ruby-3.1.2" >> ~/.zshrc
```

Install jekyll in `/usr/local/bin`

```
gem install -n /usr/local/bin jekyll bundler
```

Check that prerequisites are installed

```
ruby -v
gem -v
gcc -v
g++ -v
make -v
```

For more detailed instructions, see https://jekyllrb.com/docs/installation/macos/.

## Installation

To install all required gems specified in `eecs484/Gemfile`, run

```
bundle install
bundle update
```

## Building

To build locally, run the following and visit http://localhost:4000/. Updates propagate every time you make a change.

```
bundle exec jekyll serve
```

## Resources

-   [Jekyll Installation](https://jekyllrb.com/docs/installation/)
-   [Primer Spec Documentation](https://eecs485staff.github.io/primer-spec/docs/USAGE_ADVANCED.html#jekyll-theme-primer-spec)
-   [Markdown Table Generator](https://www.tablesgenerator.com/markdown_tables#)