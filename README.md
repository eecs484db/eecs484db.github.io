---
permalink: /README.html
---

# EECS 484 Projects

## About

This [site](https://opangz.github.io/) holds the project specs for EECS 484 at the University of Michigan. This was made possible by the EECS 485 team and the [Primer Spec](https://github.com/eecs485staff/primer-spec) Jekyll theme.

**Disclaimer:** I am a much better database engineer than I am a frontend engineer (surprise!), so I apologize in advance if this code seems very bizarre.

## MacOS Setup

Update Homebrew
```
brew update && brew upgrade && brew cleanup
```

Install `chruby` and `ruby-install` with Homebrew. Then, install `ruby`.
```
brew install chruby ruby-install
ruby-install ruby
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

(Not tested) To install all required gems specified in `eecs484/Gemfile`, run

```
bundle add webrick
bundle install
bundle update
```

## Building Site

To build locally, run the following and visit http://localhost:4000/. Updates propagate every time you make a change.

```
bundle exec jekyll serve
```