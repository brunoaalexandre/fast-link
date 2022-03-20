interface GetLinkSaveData {
  key: any;
}

interface SaveLinkData {
  key: any;
  newLink: {
    id: string;
  }
}

interface LinkData {
  link: {
    id: string;
  }
}

export async function getLinkSave({ key }: GetLinkSaveData) {
  const myLinks = await localStorage.getItem(key) as string;
  let linksSaves = JSON.parse(myLinks) || [];

  return linksSaves;
}

export async function saveLink({ key, newLink }: SaveLinkData) {
  let linksStored = await getLinkSave(key);

  const hasLink = linksStored.some(({ link }: LinkData) => link.id === newLink.id)
  if(hasLink) {
    alert('Esse link já existe na sua lista!');
    return;
  }

  linksStored.push(newLink);
  await localStorage.setItem(key, JSON.stringify(linksStored));
}
