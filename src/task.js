import http from 'http'

const port = 3000;

const server = http.createServer((req, res) => {

   
    if (req.url === '/myself') {
        res.statusCode = 200
        res.setHeader("Content-Type", "text/plain");
        res.write("I am saketh\n")
        res.write("From CSE\n")
        res.end()
    }

    else if (req.url === '/html') {
        res.statusCode = 200
        res.setHeader("Content-Type", "text/html");
        res.write(`<!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Resume</title>
                    <style>
                        body {
                            font-family: Arial, sans-serif;
                            line-height: 1.6;
                            margin: 20px;
                        }
                        .container {
                            max-width: 800px;
                            margin: auto;
                            padding: 20px;
                            border: 1px solid #ccc;
                            border-radius: 10px;
                            background-color: #f9f9f9;
                        }
                        .header {
                            text-align: center;
                        }
                        .header img {
                            border-radius: 50%;
                        }
                        .header h1, .header h2 {
                            margin: 10px 0;
                        }
                        .section {
                            margin-top: 20px;
                        }
                        .section h3 {
                            border-bottom: 2px solid #333;
                            padding-bottom: 5px;
                        }
                        .section ul {
                            list-style-type: none;
                            padding: 0;
                        }
                        .section ul li {
                            margin-bottom: 10px;
                        }
                        .contact-info, .skills ul {
                            display: flex;
                            flex-wrap: wrap;
                        }
                        .contact-info div, .skills ul li {
                            width: 50%;
                        }
                        .skills ul li {
                            margin-bottom: 0;
                        }
                    </style>
                </head>
                <body>
                    <div class="container">

                        <div class="header">
                            <img src="krish.jpg" alt="Profile Picture" width="100" height="100">
                            <h1>Saketh</h1>
                            <h2>Web Developer</h2>
                        </div>

                        <div  class="contact-info section">
                            <div><strong>Email:</strong> saketh@gmail.com</div>
                            <div><strong>Phone:</strong> 9059730116</div>
                            <div><strong>LinkedIn:</strong> linkedin.com/in/saketh</div>
                            
                        </div>
                        <div class="profile-summary section">
                            <h3>Profile Summary</h3>
                            <p> Proficient in HTML, CSS.</p>
                        </div>

                        <div class="experience section">
                            <h3>Experience</h3>
                            <ul>
                                <li>
                                    <strong>Senior Web Developer</strong><br>
                                
                                    -Experience in a company

                                </li>
                                <li>
                                    <strong>Web Developer</strong><br>
                                
                                    - Maintained and updated websites.
                                </li>
                            </ul>
                        </div>
                        <div class="education section">
                            <h3>Education</h3>
                            <ul>
                                <li>
                                    <strong>BTECH</strong><br>
                                    SRKR<br>
                                    September 2022 - June 2026
                                </li>
                            </ul>
                        </div>
                        <div class="skills section">
                            <h3>Skills</h3>
                            <ul>
                                <li>HTML & CSS</li>
                                <li>JavaScript</li>
                                <li>DSA</li>
                            </ul>
                        </div>
                    </div>
                </body>
                </html>`)
        res.end()
    }

    else if (req.method === 'POST' && req.url === '/recivedata') {
        res.statusCode = 200
        res.setHeader("Content-Type", "application/json");
        let body = "";
        req.on("data", (chunk) => {
            body += chunk.toString();
        });
        console.log(body)
        res.end()
    }

    else if (req.url === '/senddata') {
        res.statusCode = 200
        res.setHeader("Content-Type", "application/json");
        const data = ({ Name: "saketh", Branch: "cse" },{Name:"Krishna",Branch:"AIDS"})
        res.end(JSON.stringify(data))
    }

    else {
        res.statusCode = 400
        res.end("Page Not Found\n")
    }
});

server.listen(port, () => {
    console.log(`Server running at ${port}`);
});