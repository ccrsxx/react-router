## Relative Links

Relative \<Link to> values (that do not begin with a /) are relative to the path of the route that rendered them. The two links below will link to /dashboard/invoices and /dashboard/team because they're rendered inside of \<Dashboard>. This is really nice when you change a parent's URL or re-arrange your components because all of your links automatically update.

Basically, the relative links are a link that is relative to the path of the route that rendered them. If you starts with a '/' it's absolute path, you need to add all the parents path to the beginning of the relative path.

```tsx
import { Routes, Route, Link, Outlet } from 'react-router-dom';

function Home() {
  return <h1>Home</h1>;
}

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <nav>
        <Link to='invoices'>Invoices</Link>
        <Link to='team'>Team</Link>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
}

function Invoices() {
  return <h1>Invoices</h1>;
}

function Team() {
  return <h1>Team</h1>;
}

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='dashboard' element={<Dashboard />}>
        <Route path='invoices' element={<Invoices />} />
        <Route path='team' element={<Team />} />
      </Route>
    </Routes>
  );
}
```

## Multiple Sets of Routes

Although you should only ever have a single <Router> in an app, you may have as many <Routes> as you need, wherever you need them. Each <Routes> element operates independently of the others and picks a child route to render.

```tsx
function App() {
  return (
    <div>
      <Sidebar>
        <Routes>
          <Route path='/' element={<MainNav />} />
          <Route path='dashboard' element={<DashboardNav />} />
        </Routes>
      </Sidebar>

      <MainContent>
        <Routes>
          <Route path='/' element={<Home />}>
            <Route path='about' element={<About />} />
            <Route path='support' element={<Support />} />
          </Route>
          <Route path='dashboard' element={<Dashboard />}>
            <Route path='invoices' element={<Invoices />} />
            <Route path='team' element={<Team />} />
          </Route>
          <Route path='*' element={<NotFound />} />
        </Routes>
      </MainContent>
    </div>
  );
}
```

## Descendant routes

The reason why we put '\*' in the route that has component that is also has another route inside is that we want to make it that component to be able to render its children routes. If we don't do this, the component will not be able to render its children routes, it'll only render the path='/' (you can reset the absolute path here) or the index router.

```tsx
import { Routes, Route } from 'react-router-dom';

function Home() {
  return <h1>this home</h1>;
}

function DashboardGraphs() {
  return <h1>this is DashboardGraphs</h1>;
}

function InvoiceList() {
  return <h1>this is InvoiceList</h1>;
}

export function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='dashboard/*' element={<Dashboard />} />
    </Routes>
  );
}

function Dashboard() {
  return (
    <div>
      <p>Look, more routes!</p>
      <Routes>
        <Route index element={<DashboardGraphs />} />
        <Route path='invoices' element={<InvoiceList />} />
        <Route path='*' element={<h1>Empty dashboard</h1>} />
      </Routes>
    </div>
  );
}
```
