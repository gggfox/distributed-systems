# Issues


make sure kubectl is pointing to docker desktop
```bash
    kubectl config get-contexts
    kubectl config use-context docker-desktop
```

have a yaml file ready

```bash
kubectl apply -f filename.yaml # pod/filename created
```
## Pod commands
```bash
kubectl get pods
kubectl exec -it [pod_name][cmd]
kubectl logs [pod_name]
kubectl delete pod [pod_name]
kubectl apply -f [config file name]
kubectl 
```

## Deployment commands
```bash
kubectl get deployments
kubectl describe deployment [deployment_name]
kubectl apply -f [config file name]
kubectl apply -f .
kubectl delete deployment [deployment_name]
kubectl rollout restart deploymnet [deployment name] # pull latest image from docker hub
```

```bash
kubectl get services
kubectl describe service [service name]
```

## Ingress NGINX

```bash
kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.7.0/deploy/static/provider/cloud/deploy.yaml

```

## edit host file

for local development you need to edit your local host files to map your ingress host to local host

### UNIX

path
```bash
/etc/hosts
```
add 
```bash
127.0.0.1 [domain name]
example:
127.0.0.1 posts.com
```
