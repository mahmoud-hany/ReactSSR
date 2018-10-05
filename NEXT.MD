# setup the project
$ npm i --save react react-dom next

# we don't have react-router
we use instead link form next/link
    <Link href="/about">
      <a>About Page</a>  // we have to include this anchore tag
    </Link>

# Link is Just a Higher Order Component (HOC)
style has no effect on LINK
* the only role to the elent inside the link is to accept `onClick` property