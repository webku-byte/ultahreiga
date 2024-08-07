/* Reset default margin and padding */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* Body and Background */
body {
    font-family: 'Arial', sans-serif;
    background: url('background.jpg') no-repeat center center fixed;
    background-size: cover;
    color: #fff;
    line-height: 1.6;
    text-align: center; /* Align all text to center */
    margin: 0;
}

/* Container */
.container {
    display: flex;
    flex-wrap: wrap; /* Allow items to wrap on smaller screens */
    justify-content: center; /* Center the content horizontally */
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
}

/* Main Content */
.main-content {
    flex: 2;
    background: rgba(0, 0, 0, 0.2); /* Semi-transparent background for text readability */
    border-radius: 15px;
    padding: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
}

/* Header */
.header {
    margin-bottom: 30px;
}

.header h1 {
    font-size: 3em;
    color: #FFD700; /* Gold color */
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
}

/* Invitation Box */
.invitation, .location {
    background: rgba(0, 0, 0, 0.2); /* Slightly darker background for boxes */
    border: 2px solid #FFD700; /* Gold border for boxes */
    border-radius: 15px;
    padding: 20px;
    margin-bottom: 30px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    text-align: center; /* Center-align text within boxes */
}

.invitation h2, .location h2 {
    font-size: 2.5em;
    color: #FFD700; /* Gold color */
    margin-bottom: 15px;
}

/* Location Button */
.location-button {
    display: inline-block;
    padding: 12px 24px;
    font-size: 1.2em;
    color: #fff;
    background: #28a745; /* Green color for location button */
    text-decoration: none;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
    transition: background 0.3s, transform 0.3s;
    text-align: center; /* Center-align text inside button */
}

.location-button:hover {
    background: #218838; /* Darker green color on hover */
    transform: translateY(-2px);
}

/* Footer */
.footer {
    margin-top: 20px;
    font-size: 0.9em;
}

/* Pop-up */
.popup {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    justify-content: center;
    align-items: center;
    transition: opacity 0.3s ease-in-out;
}

.popup-content {
    background: #fff;
    color: #333;
    padding: 30px;
    border-radius: 15px;
    text-align: center;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
    position: relative;
    width: 90%;
    max-width: 400px;
}

.popup h2 {
    font-size: 1.8em;
    margin-bottom: 15px;
    color: #333;
}

.popup input {
    padding: 12px;
    width: calc(100% - 24px);
    margin: 15px 0;
    border: 2px solid #007bff;
    border-radius: 8px;
    font-size: 1em;
    box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
    text-align: center; /* Center-align text inside input */
}

.popup button {
    padding: 12px 24px;
    font-size: 1.2em;
    background: #007bff;
    color: #fff;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
    transition: background 0.3s, transform 0.2s;
    text-align: center; /* Center-align text inside button */
}

.popup button:hover {
    background: #0056b3;
    transform: translateY(-2px);
}

.popup button:focus {
    outline: none;
}

/* Media Query for devices with width less than 600px */
@media (max-width: 600px) {
    .header h1 {
        f
