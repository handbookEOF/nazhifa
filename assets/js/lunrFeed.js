var documents = [
	
	
		{
			"title": "Halo Dunia!",
			"content": "You’ll find this post in your _posts directory. Go ahead and edit it and re-build the site to see your changes. You can rebuild the site in many different ways, but the most common way is to run jekyll serve, which launches a web server and auto-regenerates your site when a file is updated.\n\nTo add new posts, simply add a file in the _posts directory that follows the convention YYYY-MM-DD-name-of-post.ext and includes the necessary front matter. Take a look at the source for this post to get an idea about how it works.\n\nJekyll also offers powerful support for code snippets:\n\ndef print_hi(name)\n  puts \"Hi, #{name}\"\nend\nprint_hi('Tom')\n#=&gt; prints 'Hi, Tom' to STDOUT.\n\nCheck out the Jekyll docs for more info on how to get the most out of Jekyll. File all bugs/feature requests at Jekyll’s GitHub repo. If you have questions, you can ask them on Jekyll Talk.\n\n",
			"labels": ["islam"],
			"id": 0
		}
	,
	
	
		{
			"title": "Ada apa sih!",
			"content": "You’ll find this post in your _posts directory. Go ahead and edit it and re-build the site to see your changes. You can rebuild the site in many different ways, but the most common way is to run jekyll serve, which launches a web server and auto-regenerates your site when a file is updated.\n\nTo add new posts, simply add a file in the _posts directory that follows the convention YYYY-MM-DD-name-of-post.ext and includes the necessary front matter. Take a look at the source for this post to get an idea about how it works.\n\nJekyll also offers powerful support for code snippets:\n\ndef print_hi(name)\n  puts \"Hi, #{name}\"\nend\nprint_hi('Tom')\n#=&gt; prints 'Hi, Tom' to STDOUT.\n\nCheck out the Jekyll docs for more info on how to get the most out of Jekyll. File all bugs/feature requests at Jekyll’s GitHub repo. If you have questions, you can ask them on Jekyll Talk.\n\n",
			"labels": ["islam"],
			"id": 1
		}
	,
	
	
		{
			"title": "Welcome to Jekyll!",
			"content": "You’ll find this post in your _posts directory. Go ahead and edit it and re-build the site to see your changes. You can rebuild the site in many different ways, but the most common way is to run jekyll serve, which launches a web server and auto-regenerates your site when a file is updated.\n\nTo add new posts, simply add a file in the _posts directory that follows the convention YYYY-MM-DD-name-of-post.ext and includes the necessary front matter. Take a look at the source for this post to get an idea about how it works.\n\nJekyll also offers powerful support for code snippets:\n\ndef print_hi(name)\n  puts \"Hi, #{name}\"\nend\nprint_hi('Tom')\n#=&gt; prints 'Hi, Tom' to STDOUT.\n\nCheck out the Jekyll docs for more info on how to get the most out of Jekyll. File all bugs/feature requests at Jekyll’s GitHub repo. If you have questions, you can ask them on Jekyll Talk.\n\n",
			"labels": ["jekyll","islam"],
			"id": 2
		}
	
	
	
]

var idx = lunr(function() {
	this.field('title')
	this.field('content', {boost: 10})
	this.field('labels')
	this.ref('id')
	
	documents.forEach(function (doc) {
    this.add(doc)
	}, this)
})

var store = [
	
		{
			'title': "Halo Dunia!",
			'link': "/2018/11/05/halo-dunia.html",
			'date': "November 5, 2018",
			'labels': ["islam"],
			'excerpt': "You’ll find this post in your _posts directory. Go ahead and edit it and re-build the site to see your..."
		}
		,
	
		{
			'title': "Ada apa sih!",
			'link': "/2018/11/05/ada-apa-sih.html",
			'date': "November 5, 2018",
			'labels': ["islam"],
			'excerpt': "You’ll find this post in your _posts directory. Go ahead and edit it and re-build the site to see your..."
		}
		,
	
		{
			'title': "Welcome to Jekyll!",
			'link': "/2018/10/21/welcome-to-jekyll.html",
			'date': "October 21, 2018",
			'labels': ["jekyll","islam"],
			'excerpt': "You’ll find this post in your _posts directory. Go ahead and edit it and re-build the site to see your..."
		}
		
	
]



