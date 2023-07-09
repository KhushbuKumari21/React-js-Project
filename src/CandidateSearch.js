import React, { useState } from 'react';
import './CandidateSearch.css'; 

const CandidateSearch = () => {
  const [location, setLocation] = useState('');
  const [jobRoles, setJobRoles] = useState([]);
  const [experience, setExperience] = useState('');
  const [category, setCategory] = useState('');
  const [uniqueType, setUniqueType] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCandidates, setSelectedCandidates] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [sortBy, setSortBy] = useState('');

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleJobRoleChange = (e) => {
    const selectedRoles = Array.from(e.target.selectedOptions, (option) => option.value);
    setJobRoles(selectedRoles);
  };

  const handleExperienceChange = (e) => {
    setExperience(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleUniqueTypeChange = (e) => {
    setUniqueType(e.target.value);
  };

  const handleSearchQueryChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSortByChange = (e) => {
    setSortBy(e.target.value);
  };

  const handleCandidateSelect = (candidate) => {
    setSelectedCandidates((prevSelectedCandidates) => {
      if (prevSelectedCandidates.includes(candidate)) {
        return prevSelectedCandidates.filter((selectedCandidate) => selectedCandidate !== candidate);
      } else {
        return [...prevSelectedCandidates, candidate];
      }
    });
  };

  const handleSearch = (e) => {
    e.preventDefault();

    // Perform the search query using the provided criteria
    const results = fetchCandidates(location, jobRoles, experience, category, uniqueType, searchQuery);

    // Sort the search results based on the selected sorting option
    const sortedResults = sortCandidates(results, sortBy);

    // Update the search results state
    setSearchResults(sortedResults);
  };

  const fetchCandidates = (location, jobRoles, experience, category, uniqueType, searchQuery) => {
    // Perform the API call or database query to fetch candidates based on the provided criteria
    // Return the fetched candidates as an array
    // Replace this with your own implementation
    const candidates = [
      { id: 1, name: 'John Doe', location: 'New York', jobRoles: ['Developer', 'Engineer'], experience: 3, category: 'Experienced', uniqueType: 'Type A' },
      { id: 2, name: 'Jane Smith', location: 'San Francisco', jobRoles: ['Quality Analyst', 'Engineer'], experience: 1, category: 'Fresher', uniqueType: 'Type B' },
    ];

    // Apply filters based on the provided criteria
    const filteredCandidates = candidates.filter((candidate) => {
      // Filter by location
      if (location && candidate.location.toLowerCase() !== location.toLowerCase()) {
        return false;
      }

      // Filter by job roles
      if (jobRoles.length > 0 && !jobRoles.some((role) => candidate.jobRoles.includes(role))) {
        return false;
      }

      // Filter by experience
      if (experience && candidate.experience < Number(experience)) {
        return false;
      }

      // Filter by category
      if (category && candidate.category !== category) {
        return false;
      }

      // Filter by unique type
      if (uniqueType && candidate.uniqueType !== uniqueType) {
        return false;
      }

      // Filter by search query (case-insensitive match on name)
      if (searchQuery && !candidate.name.toLowerCase().includes(searchQuery.toLowerCase())) {
        return false;
      }

      return true;
    });

    return filteredCandidates;
  };

  const sortCandidates = (candidates, sortBy) => {
    // Sort candidates based on the selected sorting option
    if (sortBy === 'name') {
      return [...candidates].sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === 'experience') {
      return [...candidates].sort((a, b) => a.experience - b.experience);
    }

    return candidates;
  };

  return (
    <div className="candidate-search-container">
      <h2>Candidate Search</h2>
      <form onSubmit={handleSearch}>
        <div>
          <label htmlFor="location">Location:</label>
          <input type="text" id="location" value={location} onChange={handleLocationChange} />
        </div>
        <div>
          <label htmlFor="jobRoles">Job Roles:</label>
          <select multiple id="jobRoles" value={jobRoles} onChange={handleJobRoleChange}>
            <option value="Developer">Developer</option>
            <option value="Engineer">Engineer</option>
            <option value="Quality Analyst">Quality Analyst</option>
            {/* Add more options for job roles */}
          </select>
        </div>
        <div>
          <label htmlFor="experience">Minimum Experience:</label>
          <input type="number" id="experience" value={experience} onChange={handleExperienceChange} />
        </div>
        <div>
          <label htmlFor="category">Category:</label>
          <select id="category" value={category} onChange={handleCategoryChange}>
            <option value="">All</option>
            <option value="Fresher">Fresher</option>
            <option value="Experienced">Experienced</option>
          </select>
        </div>
        <div>
          <label htmlFor="uniqueType">Unique Type:</label>
          <input type="text" id="uniqueType" value={uniqueType} onChange={handleUniqueTypeChange} />
        </div>
        <div>
          <label htmlFor="searchQuery">Search by Name:</label>
          <input type="text" id="searchQuery" value={searchQuery} onChange={handleSearchQueryChange} />
        </div>
        <div>
          <label htmlFor="sortBy">Sort By:</label>
          <select id="sortBy" value={sortBy} onChange={handleSortByChange}>
            <option value="">None</option>
            <option value="name">Name</option>
            <option value="experience">Experience</option>
          </select>
        </div>
        <button type="submit">Search</button>
      </form>

      <h3>Search Results</h3>
      {searchResults.length > 0 ? (
        <ul>
          {searchResults.map((candidate) => (
            <li key={candidate.id}>
              <span>Name: {candidate.name}</span>
              <span>Location: {candidate.location}</span>
              <span>Job Roles: {candidate.jobRoles.join(', ')}</span>
              <span>Experience: {candidate.experience} years</span>

              <span>Category: {candidate.category}</span>
              <span>Unique Type: {candidate.uniqueType}</span>
              <button
                className={`select-button ${selectedCandidates.includes(candidate) ? 'selected' : ''}`}
                onClick={() => handleCandidateSelect(candidate)}
              >
                {selectedCandidates.includes(candidate) ? 'Selected' : 'Select'}
              </button>
              {/* Display other candidate information */}
            </li>
          ))}
        </ul>
      ) : (
        <p>No results found.</p>
      )}

      <h3>Selected Candidates</h3>
      {selectedCandidates.length > 0 ? (
        <ul>
          {selectedCandidates.map((candidate) => (
            <li key={candidate.id}>
              <span>Name: {candidate.name}</span>
              <span>Location: {candidate.location}</span>
              <span>Job Roles: {candidate.jobRoles.join(', ')}</span>
              <span>Experience: {candidate.experience} years</span>
              <span>Category: {candidate.category}</span>
              <span>Unique Type: {candidate.uniqueType}</span>
              {/* Display other candidate information */}
            </li>
          ))}
        </ul>
      ) : (
        <p>No candidates selected.</p>
      )}
    </div>
  );
};

export default CandidateSearch;
