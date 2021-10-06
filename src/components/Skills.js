/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import Button from './Button';

const Skills = ({ data, showSkills, deleteSkill, handleOpen }) => {
  const tableHeadings = ['Subject', 'Since', 'Knowledge'];
  return (
    <div>
      <h3>Skills</h3>
      <table>
        <thead>
          <tr>
            {tableHeadings.map((headings) => (
              <th key={headings}>{headings}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {showSkills ? (
            data.map((candidates) =>
              candidates.skills.map((skill) => (
                <tr key={skill.subject}>
                  <td>{skill.subject}</td>
                  <td>{skill.since}</td>
                  <td>
                    <form>
                      <input
                        type="radio"
                        id="beginner"
                        name="expertise"
                        value="beginner"
                        defaultChecked={skill.knowledge === 'beginner' ? 'checked' : ''}
                      />
                      <label htmlFor="beginner">Beginner</label>
                      <input
                        type="radio"
                        id="user"
                        name="expertise"
                        value="user"
                        defaultChecked={skill.knowledge === 'user' ? 'checked' : ''}
                      />
                      <label htmlFor="user">User</label>
                      <input
                        type="radio"
                        id="expert"
                        name="expertise"
                        value="expert"
                        defaultChecked={skill.knowledge === 'expert' ? 'checked' : ''}
                      />
                      <label htmlFor="expert">Expert</label>
                    </form>
                  </td>
                </tr>
              ))
            )
          ) : (
            <></>
          )}
        </tbody>
      </table>
      <br />
      <Button text="New record" buttonHandler={handleOpen} />
      <Button text="Delete record" buttonHandler={deleteSkill} />
    </div>
  );
};

export default Skills;
