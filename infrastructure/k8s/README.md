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
kubectl delete deployment [deployment_name]
kubectl rollout restart deploymnet [deployment name] # pull latest image from docker hub
```

```bash
kubectl get services
kubectl describe service [service name]
```
