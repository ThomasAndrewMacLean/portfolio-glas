export const add = (a, b) => {
  return a + b;
};

const isProduction = process.env.NODE_ENV === 'production';
export const prefix = isProduction ? '/bumperballs' : '';

export const getImageUrl = (context, id, picIndex, full) => {
  return full
    ? context.find((p) => p.id == id).pic[picIndex || 0].url
    : context.find((p) => p.id == id).pic[picIndex || 0].thumbnails.large.url;
};


export const getDataFromAirtable = async () => {
  const url =
    'https://europe-west1-thomasmaclean.cloudfunctions.net/getDataAirtable';
  const dataFromAirtableJson = await fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ airtableApp: process.env.AIRTABLE_APP }),
  });
  const dataFromAirtable = await dataFromAirtableJson.json();

  return {
    ...dataFromAirtable,
  };
};