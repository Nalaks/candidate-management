import React, { useState, useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { saveAs } from 'file-saver';
import Candidates from './components/Candidates';
import Footer from './components/Footer';
import Header from './components/Header';
import Skills from './components/Skills';
import './App.css';
import CandidateModal from './components/CandidateModal';
import SkillModal from './components/SkillModal';

const App = () => {
  // state
  const [data, setData] = useState([]);
  const [skillData, setSkillData] = useState([]);
  const [fileContent, setFileContent] = useState();
  const [showSkills, setShowSkills] = useState(true);
  const [, forceUpdate] = useReducer((x) => x + 1, 0);
  const [candidateModalIsOpen, setCandidateIsOpen] = useState(false);
  const [skillModalIsOpen, setSkillIsOpen] = useState(false);
  // const [addCandidate, setAddCandidate] = useState({
  //   id: uuidv4(),
  //   firstName: '',
  //   lastName: '',
  //   dateOfBirth: '',
  //   available: '',
  //   email: '',
  //   alreadyDev: false,
  //   skills: []
  // });
  // const [addSkill, setAddSkill] = useState({
  //   subject: '',
  //   since: '',
  //   knowledge: ''
  // });

  // footer button handlers
  const resetTable = () => {
    setData([]);
    setSkillData([]);
  };
  const fileReader = new FileReader();
  const handleFileRead = () => {
    const content = JSON.parse(fileReader.result);
    setFileContent(content);
  };
  const handleFileChosen = (file) => {
    fileReader.onloadend = handleFileRead;
    fileReader.readAsText(file);
  };
  const handleFileToData = () => setData([...data, ...fileContent]);
  const handleDownload = () => {
    const output = JSON.stringify(data);
    const blob = new Blob([output]);
    saveAs(blob, 'data.json');
  };

  // show skills from selected candidate
  const toggleSkills = (e) => {
    const id = e.target.parentNode.getAttribute('data-index');
    console.log(id);
    const filteredData = () => data.filter((candidate) => candidate.id === id);
    setSkillData(filteredData);
    setShowSkills(true);
  };

  // delete candidate & delete skill
  const deleteRow = () => {
    setData(data.slice(0, data.length - 1));
    setShowSkills(false);
  };
  const deleteSkill = () => {
    skillData[0].skills.pop();
    forceUpdate();
  };

  // candidate modal handlers
  const handleSubmitCandidate = (formData) => {
    const completeData = { id: uuidv4(), ...formData, skills: [] };
    setData([...data, completeData]);
    setCandidateIsOpen(false);
  };
  const handleCandidateOpen = () => setCandidateIsOpen(true);
  const handleCandidateClose = () => setCandidateIsOpen(false);

  // skill modal handlers
  const handleSubmitSkill = (formData) => {
    console.log(skillData);
    if (skillData.length > 0) {
      skillData[0].skills.push(formData);
      setSkillIsOpen(false);
    }
  };
  const handleSkillOpen = () => setSkillIsOpen(true);
  const handleSkillClose = () => setSkillIsOpen(false);

  return (
    <div className="container">
      <Header />
      <hr className="border-bold" />
      <Candidates
        data={data}
        toggleSkills={toggleSkills}
        deleteRow={deleteRow}
        handleOpen={handleCandidateOpen}
      />
      <br />
      <hr className="border-solid" />
      <Skills
        data={skillData}
        showSkills={showSkills}
        deleteSkill={deleteSkill}
        handleOpen={handleSkillOpen}
      />
      <br />
      <hr className="border-solid" />
      <CandidateModal
        handleClose={handleCandidateClose}
        open={candidateModalIsOpen}
        handleSubmitCandidate={handleSubmitCandidate}
      />
      <SkillModal
        handleClose={handleSkillClose}
        open={skillModalIsOpen}
        handleSubmitSkill={handleSubmitSkill}
      />
      <Footer
        resetTable={resetTable}
        handleFileChosen={handleFileChosen}
        handleFileToData={handleFileToData}
        handleDownload={handleDownload}
      />
    </div>
  );
};

export default App;
