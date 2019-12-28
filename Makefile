# Self-Documented Makefile see https://marmelab.com/blog/2016/02/29/auto-documented-makefile.html

.DEFAULT_GOAL := help


PART := patch
PREVIOUS_COMMIT_TAG := $(shell git rev-list --tags --max-count=1)
CURRENT_VERSION := $(shell git describe "$(PREVIOUS_COMMIT_TAG)" --tags)


# Put it first so that "make" without argument is like "make help".
help:
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z_-]+:.*?## / {printf "\033[36m%-32s-\033[0m %s\n", $$1, $$2}' $(MAKEFILE_LIST)

.PHONY: help

create-new-release:
	@echo "Increasing version..."
	@echo "Current version $(CURRENT_VERSION)"
	@$(eval NEW_VERSION=$(shell npm version $(PART) -m "Bumped from $(CURRENT_VERSION) to v%s"))
	@echo "Increased version to $(NEW_VERSION)"
	@echo $(NEW_VERSION) > .version
	@git commit -am "Updated .version to $(NEW_VERSION)."
	@git push --tags
	@git push

