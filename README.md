# Premise

I keep hoping to find the perfect step by step guide to build out my dream app. After all, it's basic, yet powerful. It's capable of securely collecting and storing data in a customer frendly interactive platform. Then, last night, it occurred to me that this is **my** ideal project, **nobody elses**. So maybe I have to write that step by step guide. 

So here i go. And I will not hold back on documenting the parts that cause me grief, the things that require thinking (and doing) things through (over and over). 

### Tools

* VS Code
* Github
* React
* Cloudinary
* Mongoose
* Node.js
* Express


## Getting Started: React and Git and VS Code

When you create a react project from the terminal using ```npx create-react-app project-name``` and opening it in VS code using ```code .```, it is all set up to integrate with your external version control. 


* create a new repository on git. I'm naming mine **project-form**. 

* in VSC, open the terminal, control `, and run ```git init``` and then paste the code from github that starts with git clone. Go ahead and add something to the README.md, commit, push, and verify that it works. 

## Launch the React Boilerplate App

```npm start```

Voila, the app works. 

So far we have created a front end web app that is running in a development environment. The app's code is memorialized for safe keeping in a a GitHub repository. 

## Build the Form

Form syntax is easy in react, but if you're not much of a designer, then the interface will be nothing more that a simple boring form. 

### But polish it up with react bootstrap. 

So rather than build muscle memory around the form syntax, let's just immediately work in the bootstrap.  First, add the necessary packages to the project

```npm install bootstrap react-bootstrap sass```

And at the top of the App.js immediately add 

```import 'bootstrap/dist/css/bootstrap.min.css'```



<details>
  <summary> 🪲 🪲 Can't add text in the input box</summary>
  


Make sure it's labeled correctly. 

  **Example**
  ```js
<Form.Control
    onChange={handleChange}
    value={form.name}
    name='name' // I mislabeled this and it didn't work on the UI
    type='text'
    placeholder='Name'
/>
  ```
</details>



<details>
  <summary> 🪲 🪲 Reset form (i.e., clear values) after submit</summary>
  

Why was this hard??? Beats me. All I needed to do was add a command after the last step in the handle submit function, replacing the state with the original state. ```setForm('')```

  **Example**
  
  ```js
  const handleSubmit = event => {
    event.preventDefault()
    console.log(form)
    setForm('') // I just needed to add this
  }
```
</details>




# Upload photos to bring your ideas to life

This is, frankly, hard for me. I don't know why. But I suppose I'd rather have an essential part be hard than an ancillary one. 

The way I see it, no matter what, the app will be dependant upon the data that our user will input. Photos will be integral to the data set as a whole, but us ing them as output requires a few transformative steps. This is because our database does not store photos, rather it stores a url link to the photo. So we have to create that url. This is where Cloudinary comes in. Cloudinary stores photos. So all we need to do is have a free account.

We can integrate the necessary functionality to upload, create a url storage place, and 













