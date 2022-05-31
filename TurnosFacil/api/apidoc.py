from flask import Flask
from flask import jsonify
import json
#from flask_cors import CORS

app=Flask(__name__)
#CORS(app)
with open("medicos.json") as medicos:
    data=json.load(medicos)



@app.route("/home", methods = ['GET'])
def home():
    resp= jsonify(data)
    resp.status_code = 200
    return resp


@app.route("/medico/<int:x>", methods = ['GET'])
def medico(x): 
    resp= jsonify(data[x])
    resp.status_code=200
    return resp

@app.route("/turno/<string:nom>/<string:dia>/<string:hora>", methods = ['GET'])
def turno (nom,dia,hora):
    turnotmp = { 'medico': nom,'dia': dia, 'hora': hora}
    resp= jsonify(turnotmp)
    return resp


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=8080)