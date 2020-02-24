# 2020

2020 in ASCII

## What is it?

An [OpenFaaS function](https://github.com/openfaas/faas/) using the [node12 template](https://docs.openfaas.com/cli/templates/#nodejs-12-node12-of-watchdog-template).

This function is deployed on [OpenFaaS Cloud](https://github.com/openfaas/openfaas-cloud) using the free [Community Cluster](https://github.com/openfaas/community-cluster).

## Usage

```sh
curl -s https://alexellis.o6s.io/ascii-2020?q=teamserverless

┏━━┓┏━━┓┏━━┓┏━━┓
┗━┓┃┃┏┓┃┗━┓┃┃┏┓┃
┏━┛┃┃┃┃┃┏━┛┃┃┃┃┃
 TEAMSERVERLESS
┃┏━┛┃┃┃┃┃┏━┛┃┃┃┃
┃┗━┓┃┗┛┃┃┗━┓┃┗┛┃
┗━━┛┗━━┛┗━━┛┗━━┛
```

Use a hashtag i.e. `#openfaas`:

```sh
curl -s https://alexellis.o6s.io/ascii-2020?q=%23openfaas
```

See other [HTML encoding espressions](https://www.december.com/html/spec/esccodes.html)

Or make your own link: https://alexellis.o6s.io/ascii-2020?q=teamserverless

## Deploy it for yourself

You can deploy the 2020 function to your Raspberry Pi using OpenFaaS on k8s/k3s or [faasd](https://blog.alexellis.io/faasd-for-lightweight-serverless/).

```sh
faas-cli deploy -f stack-armhf.yml
```

You can also build and deploy to a regular `x86-64`-based Kubernetes cluster using `faas-cli up`.

## Backlog

* [ ] Center the text when less than width of the 2020 text
* [x] Wrap the text when wider than the width of the 2020 text

### Contributing

Commits need to be signed-off with `git commit -s`, don't submit through the GitHub UI.



