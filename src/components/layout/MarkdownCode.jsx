import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

export default function MarkdownCode(file) {
  const [githubUser, setGithubUser] = useState('');
  const [githubRepo, setGithubRepo] = useState('');
  const unsavedFiles = localStorage.unsavedFiles === 'true';
  const [complete, setComplete] = useState(false);

  const setHooks = () => {
    setGithubUser(unsavedFiles && localStorage.github_user ? localStorage.github_user : file.github_user);
    setGithubRepo(unsavedFiles && localStorage.github_repository_name ? localStorage.github_repository_name : file.github_repository_name);
    setComplete(true);
  }

  useEffect(() => {
    setHooks();
  }, [])

  return complete ? `![GitHub](https://img.shields.io/github/license/${githubUser}/${githubRepo}?style=for-the-badge) ![Repo Size](https://img.shields.io/github/languages/code-size/${githubUser}/${githubRepo}.svg?style=for-the-badge) ![TOP_LANGUAGE](https://img.shields.io/github/languages/top/${githubUser}/${githubRepo}.svg?style=for-the-badge) ![FORKS](https://img.shields.io/github/forks/${githubUser}/${githubRepo}.svg?style=for-the-badge&social) ![Stars](https://img.shields.io/github/stars/${githubUser}/${githubRepo}.svg?style=for-the-badge)
` : ''
}
