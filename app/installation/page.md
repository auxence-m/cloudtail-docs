---
title: Installation
---

## Overview

`cloudtail` is a lightweight cloud-native command-line tool written in Golang that allows users to view or tail logs from Google Cloud Logging (similar to `kubectl logs`).

## Required permission

- This tool requires only the **Logs Viewer (roles/logging.viewer)** permission on the target project

- Authentication is handled via [Application Default Credentials (ADC)](https://docs.cloud.google.com/docs/authentication/set-up-adc-local-dev-environment#external-idp)


## How to run

### Prerequisites

- Ensure you have [Golang](https://go.dev/doc/install) installed on your machine.

### Installation

1. Clone the repository
```
git clone https://github.com/auxence-m/cloudtail.git
```

2. Navigate to the project directory

```
cd cloudtail
```

3. Install dependencies

```
go mod tidy
```

4. Build the application

```
go build
``` 

After building, you'll find the `cloudtail` executable (`cloudtail.exe` on Windows) in your project directory.

5. Run the application

```
cloudtail [command] --flag
```

## Documentation

Full documentation for cloudtail, including all available commands, can be found in the [documentation page](/docs)