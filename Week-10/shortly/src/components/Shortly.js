import React, { useState, useContext } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import { Typography } from '@mui/material';
import Link from '@mui/material/Link';
import ShortlyTable from './ShortlyTable';
import  ShortlyContext  from '../_store/shortly-context';

let url = "https://api.shrtco.de/v2/shorten?url="
let infoUrl = "https://api.shrtco.de/v2/info?code="


const Shortly = () => {
  const shortlyCtx = useContext(ShortlyContext)

  // links state
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
    shortlyCtx.onUpdateListHandler(obj)
  }

  const submitHandler = async () => {
    setLoading(true)
    fetch(`${url}${link}`)
      .then(res => res.json())
      .then(data => {
        if (data.ok) {
          setShortyLink(data.result.short_link)
          fetch(`${infoUrl}${data.result.code}`)
            .then(res => res.json())
            .then(data1 => {
              if (data1.ok) {
                //   newShortly()
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
    <Box component="form" sx={{ '& > :not(style)': { m: 1 }, }} >
      <TextField sx={{ width: '40ch' }}  id="outlined-basic" value={link} onChange={linkChangeHandler} label="example.com" variant="outlined" />
      <Button sx={{ marginTop: '2rem' }} onClick={submitHandler} variant="contained">GENERATE</Button>
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

    <ShortlyTable />
  </>);
}

export default Shortly;