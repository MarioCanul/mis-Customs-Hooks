# PrivateRoute Componente 
-tener react Router



Ejemplo de uso:
```
    <Router>
        <div>
          <Switch>
            <Route exact path="/login" component={LoginScreen} />

            <PrivateRoute isAuthenticated={user.logged} path="/" component={DashBoardRoutes} />
            
          </Switch>
        </div>
     
      </Router>
```

PrivateRoute // tiene que recibir 3 valores por defecto el isAuthenticated  el componente y el redirect(donde see rediccionara si falla el isAuthenticated)