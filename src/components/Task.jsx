import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask, toggleComplete } from '../TodoSlice';

const Task = ({ task }) => {

  const dispatch = useDispatch();

  return (
    <li className="flex justify-between items-center p-2 border-b">
    <span className={task.completed ? "line-through text-2xl" : "text-2xl"}>{task.name}</span>
    <div>
      <button onClick={() => dispatch(toggleComplete(task.id))}>
        {task.completed ? <img className='hover:scale-125 transition duration-300' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAApdJREFUSEvFlkuoTlEUx3+XK49LUnSLDOSRCBNDccmMyDvPmYG8ykAeRRKRgTwGmAhxb0KEAZEiE4YYeJWBgULeJQrrr3V0HGefs79z1LfqDu531l6/vfZ6ttAkaWkSl6rgwcAH4EvVi1cFdwBHgBnA8yrwOuBbwEdgIXCtUXhdsHg/gR3+F81vBDwIWADomUcBEzKUy8BS4FMMPRa8BDgMDCgxehGY87/Au4AtKWPfzLOnwNgM4Ip7rLiXSpHH+nYIWO1W3gDbgFPAREDJlUgSY8U7SkLgbsBxYIVbuQnMB977/4qzwIqn4qr45olC8y7vQwgs4Ak/cBeYCnxPGRD4KDALeByATgNOW50vB25kdULgO6Y8yT1SBr/KHFTn+ux1nMftayF6DfQC9FrTY8AjgSeuuNkO74kK2r9Kyo81/vMw4EVaJc/jxVanZ1xpPPCgIlgJeN/PrvIW+8dUHlhe7rbbKovVNOqISqsfsN/CsqHM42PASsvih8C4OlQPmUJ3FlhUBj4ArANeAkNrgp9Z3Q8Huiz7FcLCp1b6nwS+Am3WNH5UhHf3ed0T2Gv2NpWBx9gweORKkwGVVhVRHauUJPJWXhd6rK6lzUI1eMGyel4VquXHeWCu9Xn19vZU1/ttLtRANImSHj0FuN0gXM0neSnVs3LmLwmBVUaaQP3d+9mpZyu7g5rFPRujA30vU3K9jQVLT/35OtDqW4bqW0kSEoVmveluN73erqRenjtAyhYBLXOd3gRkS4vdOeCqdzRdajQwE1gGDEndaqNVxb7QLcvAOjfCYdlVJ2RTw2MrcLAoJjFgne8B7LRYrQX6BAyqWVzyoaJ2Wyix4MSIYqeFQAmTiEamloLQXM69QKPgMkeivzcN/AtTU3Af4vTjBgAAAABJRU5ErkJggg=="/> :<img className='hover:scale-125 transition duration-300' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAjBJREFUSEvtlk1rE1EUht9zO5KZaZBYJzWTRuxCN2LddWtbEN2IINal/gBBaEXXuhaKK/0BYjfdVBfismq3KuhSxQqWCe3ENlWTmebjHp1owuS7ySRG0LsZmHvPeTjvee/lEAa0aEBc/F3g8e1IZDfvnhwiRQRRpMgFGdqnvv10IJ2uzVNX8ZitzTPoDgAlCNQXmwdhzjKy9/35qsCJlDYmmdZ7BPSnYeSHRq34t1T5ZxXY3FRPEYnnfQCDWU4lR90XDcEJOzwtIVf6ARYQM+vR78/+g0sKBJQ6zYTPxJho1KqWUsdsdUpAVPrQQa/zkDwjcs7roqY/IMZsbWxfesxEl5NG5qEHi9vDNwH23oGq1XMwg+4mo5nrv6D6eQCPgPqnuHupia8RaJoZF8ulMHglaTinQZCxL+HjQsqXALSOe9zcXLxgRZ0bYChxW38CwhmA3rkiNLl1cOtrLBmOCkW+AnC4mS+6lJoXLcO54lU2vgY1F9aXi0V5dSPmrh19j5AT0VcZmGxlxi7BpZSPLSM7C0LBDzBTw0vEfKndDQgC9hzzVEtnL3w4ht3fZrr183u7HdTb795cley0KtzMWQ5p55hoaS/QtuAOXi7PvScAqH8avFde5VygHndM8wW0BA9sEDhi62YesIJU1iSWC5LMzUOZjfJ+3bBn2tocgRZKN6A3yxv25i0je8+fruFcndjZP1LI5SYUKIHmbm+81RTtzceR7Z3aGgIlDiLIvwf+AYf2EC5No4EPAAAAAElFTkSuQmCC"/>}
      </button>
      <button
        onClick={() =>dispatch( deleteTask(task.id))}
        className=" text-2xl p-1"
      >
        <img className='hover:scale-125 transition duration-300' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAATVJREFUSEvtlrtNA0EQhr8REZEpgRIQDWDXAAGBEe4AyXIOjgmgBCNIkEwN4AYsl+AScETmZUfcHYu50z4O6Qh2kpNuHv/OP7M7I3Qk0hEuwcAG9oAJsN9w2A/gVmAbkkwM8D1w5Ql6JzD+M2ADl8AsJCBwLvDss/2RsYE+8OpzStQPBN5K338DfAiMEjPyuc0E1rUZu54GjoADXzSP/l1gVWfT2NW23lqPk5bAC1tX7ZtfkoErSmqonhZKpW63BAu+r8q1w2t7qoWv59XAjf24wfX31Cr1v+qtSSUZuKIiuKsz1TsvQm6ukpB8neKvEzAovHRe6yrkyoOzGrkbTHuqE8djEvAcOE0ELN1eBM5i5/EQeGwJfCHwFAVcTJrjYgT2Ig+wsT2hNC+b/IIX+khgr3lnwJ9e5YgfS1/bbgAAAABJRU5ErkJggg=="/>
      </button>
    </div>
  </li>
  );
};

export default Task;

