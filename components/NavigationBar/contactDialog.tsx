import React, {Dispatch, SetStateAction} from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import { Container } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

function createData(key: string, value: string) {
  return { key, value };
}

const rows = [
  createData('Name', 'MARTY DE VITERBO'),
  createData('Email', 'MMDEVITERBO@UP.EDU.PH'),
  createData('Phone','+639052405367'),
];

export default function ContactDialog({
  open,
  setOpen,
}:{
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
}) {
  const GMAIL_LINK: string = `https://mail.google.com/mail/u/0/?fs=1&to=mmdeviterbo@up.edu.ph&su=APPLICATION&body=Hello!&tf=cm`

  return (
    <div>
      <Dialog
        open={open}
        onClose={()=>setOpen(false)}
        className="dialog-main"
      >
        <DialogContent style={{padding:0}}>
            <Container className="contact-dialog-container">
              <p className="contact-dialog-title">CONTACT</p>
              <Table>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow key={row.key}>
                      <TableCell component="th" scope="row" style={{border:'none'}}>
                        <p className="table-value">{row.key}</p>
                      </TableCell>

                      {row.value === "MMDEVITERBO@UP.EDU.PH"?
                        <TableCell style={{border:'none'}}>
                          <p
                            onClick={()=>window.open(GMAIL_LINK, '_blank').focus()} 
                            className="table-value-email">{row.value}</p>
                        </TableCell>
                        :
                        <TableCell style={{border:'none'}}>
                          <p className="table-value">{row.value}</p>
                        </TableCell>
                      }

                    </TableRow>
                  ))}
                  <TableRow>
                      <TableCell component="th" scope="row" style={{border:'none'}} colSpan={2}>
                        <a 
                          className="download-cv"
                          href='/cv/DE VITERBO_MARTY_CV.pdf'
                          download>
                            Download CV
                        </a>
                      </TableCell>
                    </TableRow>
                </TableBody>
              </Table>
            </Container>
        </DialogContent>
      </Dialog>
    </div>
  );
}
