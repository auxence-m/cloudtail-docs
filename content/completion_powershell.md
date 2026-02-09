---
title: powershell completion
---

## cloudtail completion PowerShell

Generate the autocompletion script for PowerShell

### Synopsis

Generate the autocompletion script for PowerShell.

To load completions in your current shell session:

	cloudtail completion powershell | Out-String | Invoke-Expression

To load completions for every new session, add the output of the above command
to your PowerShell profile.


```
cloudtail completion powershell [flags]
```

### Options

```
  -h, --help              help for powershell
      --no-descriptions   disable completion descriptions
```

### SEE ALSO

* [cloudtail completion](/docs/completion.md)	 - Generate the autocompletion script for the specified shell

