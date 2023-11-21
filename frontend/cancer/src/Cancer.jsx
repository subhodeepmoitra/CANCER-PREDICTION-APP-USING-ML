import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [formData, setFormData] = useState({
    GENDER: '1',
    AGE: '',
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePredict = async () => {
    try {
      const response = await axios.post('http://localhost:5000/predict', formData);
      setPredictions(response.data.predictions);
    } catch (error) {
      console.error('Error making prediction:', error);
    }
  };

  return (
    <div>
      <h1>Lung Cancer Prediction</h1>
      <form>
       {/*  <div>
          <label htmlFor="GENDER">GENDER:</label>
          <select name="GENDER" onChange={handleInputChange} value={formData.GENDER}>
            <option value="1">Male</option>
            <option value="2">Female</option>
          </select>
        </div> */}
         <div>
          <label htmlFor="GENDER">GENDER:</label>
          <input type="text" name="GENDER" value={formData.GENDER} onChange={handleInputChange} />
        </div>
        <div>
          <label htmlFor="AGE">AGE:</label>
          <input type="text" name="AGE" value={formData.AGE} onChange={handleInputChange} />
        </div>
        <div>
          <label htmlFor="AGE">SMOKING:</label>
          <input type="text" name="SMOKING" value={formData.SMOKING} onChange={handleInputChange} />
        </div>
        <div>
          <label htmlFor="AGE">YELLOW_FINGERS:</label>
          <input type="text" name="YELLOW_FINGERS" value={formData.YELLOW_FINGERS} onChange={handleInputChange} />
        </div>
        <div>
          <label htmlFor="AGE">ANXIETY:</label>
          <input type="text" name="ANXIETY" value={formData.ANXIETY} onChange={handleInputChange} />
        </div>
        <div>
          <label htmlFor="AGE">PEER_PRESSURE:</label>
          <input type="text" name="PEER_PRESSURE" value={formData.PEER_PRESSURE} onChange={handleInputChange} />
        </div>
        <div>
          <label htmlFor="AGE">CHRONIC_DISEASE:</label>
          <input type="text" name="CHRONIC_DISEASE" value={formData.CHRONIC_DISEASE} onChange={handleInputChange} />
        </div>
        <div>
          <label htmlFor="AGE">FATIGUE:</label>
          <input type="text" name="FATIGUE" value={formData.FATIGUE} onChange={handleInputChange} />
        </div>
        <div>
          <label htmlFor="AGE">ALLERGY:</label>
          <input type="text" name="ALLERGY" value={formData.ALLERGY} onChange={handleInputChange} />
        </div>
        <div>
          <label htmlFor="AGE">WHEEZING:</label>
          <input type="text" name="WHEEZING" value={formData.WHEEZING} onChange={handleInputChange} />
        </div>
        <div>
          <label htmlFor="AGE">ALCOHOL_CONSUMING:</label>
          <input type="text" name="ALCOHOL_CONSUMING" value={formData.ALCOHOL_CONSUMING} onChange={handleInputChange} />
        </div>
        <div>
          <label htmlFor="AGE">COUGHING:</label>
          <input type="text" name="COUGHING" value={formData.COUGHING} onChange={handleInputChange} />
        </div>
        <div>
          <label htmlFor="AGE">SHORTNESS_OF_BREATH:</label>
          <input type="text" name="SHORTNESS_OF_BREATH" value={formData.SHORTNESS_OF_BREATH} onChange={handleInputChange} />
        </div>
        <div>
          <label htmlFor="AGE">SWALLOWING_DIFFICULTY:</label>
          <input type="text" name="SWALLOWING_DIFFICULTY" value={formData.SWALLOWING_DIFFICULTY} onChange={handleInputChange} />
        </div>
        <div>
          <label htmlFor="AGE">CHEST_PAIN:</label>
          <input type="text" name="CHEST_PAIN" value={formData.CHEST_PAIN} onChange={handleInputChange} />
        </div>

        {/* Repeat the pattern for other form fields */}
        {/* ... */}
        <button type="button" onClick={handlePredict}>
          Predict
        </button>
      </form>
      {predictions !== null && predictions !== undefined && (
      <div>
        <h2>Predictions:</h2>
        <p>{predictions.join(',')}</p>
      </div>
    )}
    </div>
  );
}

export default App;
