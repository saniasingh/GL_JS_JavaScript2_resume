document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("searchInput");
  const prevButton = document.getElementById("prevButton");
  const nextButton = document.getElementById("nextButton");
  const resumesContainer = document.getElementById("resumesContainer");

  let resumes = resumeData.resume;
  let filteredResumes = resumes;
  let currentIndex = 0;
  displayResume(currentIndex, filteredResumes);

  function displayResume(index, resumeList) {
    const resume = resumeList[index];
    const html = generateSampleResume(resume);
    resumesContainer.innerHTML = html;
    updateUI();
  }

  searchInput.addEventListener("input", function () {
    console.log(searchInput.value);
    const searchTerm = searchInput.value.toLowerCase();
    filteredResumes = resumes.filter((resume) => {
      console.log(searchTerm);
      console.log(resume.basics.AppliedFor);
      return resume.basics.AppliedFor.toLowerCase().includes(
        searchTerm.toLowerCase()
      );
    });
    console.log(filteredResumes);
    if (filteredResumes.length > 0) {
      currentIndex = 0;
      displayResume(currentIndex, filteredResumes);
    } else {
      resumesContainer.innerHTML = "<p>No matching resumes found.</p>";
    }
  });

  prevButton.addEventListener("click", function () {
    currentIndex--;
    displayResume(currentIndex, filteredResumes);
  });

  nextButton.addEventListener("click", function () {
    currentIndex++;
    displayResume(currentIndex, filteredResumes);
  });

  function updateUI() {
    if (currentIndex > 0) {
      prevButton.style.display = "block";
    } else {
      prevButton.style.display = "none";
    }
    if (currentIndex < filteredResumes.length - 1) {
      nextButton.style.display = "block";
    } else {
      nextButton.style.display = "none";
    }
  }

  function generateSampleResume(resume) {
    let html = `
        <div class="resume">
            <h2>${resume.basics.name}</h2>
            <p>Applied For: ${resume.basics.AppliedFor}</p>
            <p>Email: ${resume.basics.email}</p>
            <p>Phone: ${resume.basics.phone}</p>
            <div class="section">
                <h3>Skills:</h3>
                <div class="skills">`;

    resume.skills.keywords.forEach((skill) => {
      html += `<span>${skill}</span>`;
    });

    html += `
                </div>
            </div>
            <div class="section">
                <h3>Work Experience:</h3>
                <p><strong>Company Name:</strong> ${resume.work["Company Name"]}</p>
                <p><strong>Position:</strong> ${resume.work.Position}</p>
                <p><strong>Start Date:</strong> ${resume.work["Start Date"]} - <strong>End Date:</strong> ${resume.work["End Date"]}</p>
                <p><strong>Summary:</strong> ${resume.work.Summary}</p>
            </div>
            <div class="section">
                <h3>Education:</h3>
                <p><strong>Institute:</strong> ${resume.education.UG.institute}</p>
                <p><strong>Course:</strong> ${resume.education.UG.course}</p>
                <p><strong>Start Date:</strong> ${resume.education.UG["Start Date"]} - <strong>End Date:</strong> ${resume.education.UG["End Date"]}</p>
                <p><strong>CGPA:</strong> ${resume.education.UG.cgpa}</p>
            </div>
            <div class="section">
                <h3>Achievements:</h3>
                <ul>`;

    resume.achievements.Summary.forEach((achievement) => {
      html += `<li>${achievement}</li>`;
    });

    html += `
                </ul>
            </div>
            <div class="section">
                <h3>Interests:</h3>
                <ul>`;

    resume.interests.hobbies.forEach((interest) => {
      html += `<li>${interest}</li>`;
    });

    html += `
                </ul>
            </div>
        </div>`;

    return html;
  }
});
