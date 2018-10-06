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

# we can name the comps folder name as we like 
the `pages` file is the required one

# Props.router.query inside of page

# Route Masking
<Link as={`/p/${props.id}`} href={`/post?title=${props.title}`}>
  <a>{props.title}</a>
</Link>

as is what will the user see.
href is the link that our applicatin will see