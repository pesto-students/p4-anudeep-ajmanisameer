import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import { Typography } from '@mui/material';
import Link from '@mui/material/Link';
import ShortlyTable from './ShortlyTable';

let url = "https://api.shrtco.de/v2/shorten?url="
let infoUrl = "https://api.shrtco.de/v2/info?code="


const Shortly = () => {
  // local storage
  const [localLinks, setLocalLinks] = useState(JSON.parse(localStorage.getItem('links')) || [])
  // link pasted
  const [link, setLink] = useState('')
  const [shortyLink, setShortyLink] = useState('')
  const [generatedLink, setGeneratedLink] = useState('')
  //utilities
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)


  const linkChangeHandler = (event) => {
    setLink(event.target.value)
  }

  // updating localStorage
  const newShortly = (obj) => {
    let localCatch = JSON.parse(localStorage.getItem('links')) || []
    localStorage.setItem('links', JSON.stringify([obj, ...localCatch]))
    setLocalLinks([obj, ...localCatch])
    // setLocalLinks((prevLinks) => {
    // // localStorage.setItem('links', JSON.stringify([obj, ...prevLinks]))
    //   return [obj, ...prevLinks]
    // })
  }

  const submitHandler = async () => {
    setLoading(true)
    fetch(`${url}${link}`)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data.ok) {
          setShortyLink(data.result.short_link)
          fetch(`${infoUrl}${data.result.code}`)
            .then(res => res.json())
            .then(data1 => {
              if (data1.ok) {
                //   newShortly()
                // updating state takes long
                let obj = {
                  id: Math.random().toString(),
                  link: link,
                  generatedLink: data1.result.url,
                  short_link: data.result.short_link
                }
                newShortly(obj)
                setGeneratedLink(data1.result.url)
                setLoading(false)
              } else {
                // error block
                setError('Server responds with error!')
                setLoading(false)
                setTimeout(() => {
                  setError('')
                }, 3000);
              }
            })
          // .catch(error => {
          //   setError('Server responds with error!')
          //   setLoading(false)
          // })
        }
        else {
          // error block
          setError('Server responds with error!')
          setLoading(false)
          setTimeout(() => {
            setError('')
          }, 3000);
        }
        // error block
      }).catch((error) => {
        setError('Server responds with error!')
        setLoading(false)
        setTimeout(() => {
          setError('')
        }, 3000);
      });


  }

  return (<>
    <Box component="form" sx={{ '& > :not(style)': { m: 1, width: '40ch' }, }} >
      <TextField id="outlined-basic" value={link} onChange={linkChangeHandler} label="example.com" variant="outlined" />
      <Button onClick={submitHandler} variant="contained">GENERATE</Button>
    </Box>

    {error}

    {loading && <Box >
      <CircularProgress alignItems="center" />
    </Box>
    }

    {generatedLink && <Box>
      <Typography variant="h5" component="h2">
        Link Generated  : <Link href={generatedLink}> {shortyLink}</Link>
      </Typography>
    </Box>}

    <ShortlyTable links={localLinks}/>
  </>);
}

export default Shortly;