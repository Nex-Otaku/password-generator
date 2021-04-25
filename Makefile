no-command:
	@echo Usage: make [scenario]

server:
	browser-sync start --server --files "."