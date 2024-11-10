import React from 'react'

function ContactForm() {
  return (
    <div className=' bg-[#140c1c] rounded-lg p-4 sm:p-10'>
      <h1 className='text-cl text-2xl md:text-3xl lg:text-[2.5rem] font-bold'>Let's work together!
      </h1>
      <p className=' text-white opacity-70 mt-3 text-sm lg:text-base'>Let&apos;s team up and create something great! I&apos;m all about building smooth, user-friendly web apps and love collaborating on new projects.
      </p>
      <form className=' mt-8 block w-full overflow-hidden' action="https://api.web3forms.com/submit" method="POST">
        <input type="hidden" name="access_key" value="682384dd-c7ca-4c54-bfb5-5dca98b81ebe" />

        <div className=' flex flex-col items-start justify-between gap-4'>

          <input type="text" name="name" required placeholder='John Doe' className=' flex-1 bg-black text-white px-6 py-3 rounded-md placeholder:text-gray-500 border-[1.5px] border-gray-500 outline-none w-full' />

          <input type="email" name="email" required placeholder='Johndoe@example.com' className=' flex-1 bg-black text-white px-6 py-3 rounded-md placeholder:text-gray-500 border-[1.5px] border-gray-500 outline-none w-full' />

          <textarea name="message" required placeholder='Message'
            className='flex-1 bg-black text-white px-6 py-3 rounded-md placeholder:text-gray-500 border-[1.5px] border-gray-500 outline-none w-full'
            rows={5}
          >
          </textarea>

          <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

          <button className='rounded-full px-8 py-3.5 bg-zinc-500 transition-all duration-300 hover:bg-opacity-70 text-md font-semibold text-gray-200' type="submit">Submit Form</button>
        </div>

      </form>
    </div>
  )
}

export default ContactForm