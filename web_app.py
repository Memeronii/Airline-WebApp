from routes import *

# Starting the python applicaiton
if __name__ == '__main__':
    page = {'title' : 'Airline Web Application',}
    # Note, you're going to have to change the PORT number
    app.run(debug=True, host='0.0.0.0', port=int(10563))
