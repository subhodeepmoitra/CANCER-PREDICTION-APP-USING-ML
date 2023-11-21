import React, { useState } from 'react';
import axios from 'axios';
import './cancer.css';

function App() {
  const [formData, setFormData] = useState({
    GENDER: '1',
    AGE: '0',
    SMOKING: '1',
    YELLOW_FINGERS: '1',
    ANXIETY: '1',
    PEER_PRESSURE: '1',
    CHRONIC_DISEASE: '1',
    FATIGUE: '1',
    ALLERGY: '1',
    WHEEZING: '1',
    ALCOHOL_CONSUMING: '1',
    COUGHING: '1',
    SHORTNESS_OF_BREATH: '1',
    SWALLOWING_DIFFICULTY: '1',
    CHEST_PAIN: '1'
  });

  const [predictions, setPredictions] = useState(null);
  const [probability, setProbability] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePredict = async () => {
    try {
      const response = await axios.post('http://localhost:5000/predict', formData);
      setPredictions(response.data.predictions);
      setProbability(response.data.probability_positive_class);
    } catch (error) {
      console.error('Error making prediction:', error);
    }
  };

  return (
    <div className="app-container">
      <h1>Lung Cancer Prediction</h1>
      <form>
       {/*  <div>
          <label htmlFor="GENDER">GENDER:</label>
          <select name="GENDER" onChange={handleInputChange} value={formData.GENDER}>
            <option value="1">Male</option>
            <option value="2">Female</option>
          </select>
        </div> */}
         <div className="form-group">
          <label className='input-group-text' htmlFor="GENDER">GENDER:</label>
          <input className='form-control' type="text" name="GENDER" value={formData.GENDER} onChange={handleInputChange} required/>
        </div>
        <div>
          <label className='input-group-text'  htmlFor="AGE">AGE:</label>
          <input className='form-control' type="text" name="AGE" value={formData.AGE} onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label className='input-group-text' htmlFor="AGE">SMOKING:</label>
          <input className='form-control' type="text" name="SMOKING" value={formData.SMOKING} onChange={handleInputChange} required/>
        </div>
        <div className="form-group">
          <label className='input-group-text' htmlFor="AGE">YELLOW_FINGERS:</label>
          <input className='form-control' type="text" name="YELLOW_FINGERS" value={formData.YELLOW_FINGERS} onChange={handleInputChange} required/>
        </div>
        <div className="form-group">
          <label className='input-group-text' htmlFor="AGE">ANXIETY:</label>
          <input className='form-control' type="text" name="ANXIETY" value={formData.ANXIETY} onChange={handleInputChange} required/>
        </div>
        <div className="form-group">
          <label className='input-group-text' htmlFor="AGE">PEER_PRESSURE:</label>
          <input className='form-control' type="text" name="PEER_PRESSURE" value={formData.PEER_PRESSURE} onChange={handleInputChange} required/>
        </div>
        <div className="form-group">
          <label className='input-group-text' htmlFor="AGE">CHRONIC_DISEASE:</label>
          <input className='form-control' type="text" name="CHRONIC_DISEASE" value={formData.CHRONIC_DISEASE} onChange={handleInputChange} required/>
        </div>
        <div className="form-group">
          <label className='input-group-text' htmlFor="AGE">FATIGUE:</label>
          <input className='form-control' type="text" name="FATIGUE" value={formData.FATIGUE} onChange={handleInputChange} required/>
        </div>
        <div className="form-group">
          <label className='input-group-text' htmlFor="AGE">ALLERGY:</label>
          <input className='form-control' type="text" name="ALLERGY" value={formData.ALLERGY} onChange={handleInputChange} required/>
        </div>
        <div className="form-group">
          <label className='input-group-text' htmlFor="AGE">WHEEZING:</label>
          <input className='form-control' type="text" name="WHEEZING" value={formData.WHEEZING} onChange={handleInputChange} required/>
        </div>
        <div className="form-group">
          <label className='input-group-text' htmlFor="AGE">ALCOHOL_CONSUMING:</label>
          <input className='form-control' type="text" name="ALCOHOL_CONSUMING" value={formData.ALCOHOL_CONSUMING} onChange={handleInputChange} required/>
        </div>
        <div className="form-group">
          <label className='input-group-text' htmlFor="AGE">COUGHING:</label>
          <input className='form-control' type="text" name="COUGHING" value={formData.COUGHING} onChange={handleInputChange} required/>
        </div>
        <div className="form-group">
          <label className='input-group-text' htmlFor="AGE">SHORTNESS_OF_BREATH:</label>
          <input className='form-control' type="text" name="SHORTNESS_OF_BREATH" value={formData.SHORTNESS_OF_BREATH} onChange={handleInputChange} required/>
        </div>
        <div className="form-group">
          <label className='input-group-text' htmlFor="AGE">SWALLOWING_DIFFICULTY:</label>
          <input className='form-control' type="text" name="SWALLOWING_DIFFICULTY" value={formData.SWALLOWING_DIFFICULTY} onChange={handleInputChange} required/>
        </div>
        <div className="form-group">
          <label className='input-group-text' htmlFor="AGE">CHEST_PAIN:</label>
          <input className='form-control' type="text" name="CHEST_PAIN" value={formData.CHEST_PAIN} onChange={handleInputChange} required/>
          &nbsp;
        </div>
        &nbsp;

        {/* Repeat the pattern for other form fields */}
        {/* ... */}
        <button className='btn btn-info' type="button" onClick={handlePredict}>
          Predict
        </button>
      </form>
      {predictions !== null && predictions !== undefined && (
      <div>
        <h2>Predictions:</h2>
        <p>{predictions.join(',')}</p>
        <p>{`Probability: ${probability}`}</p>
      </div>
    )}
    </div>
  );
}

export default App;
