import React from 'react'

const HeaderContainer = () => {
  return (
    <div className='mx-auto w-[73vw] h-[25vh]'>
        <h1 className='text-white text-center text-[2rem] mb-8'>Trusted Matrimony & Matchmaking Service</h1>
        <div className='w-[100%] h-[15vh] bg-[#00000046] flex items-center gap-3 '>
          <div className='flex flex-col text-white w-[185px] text-[1rem] '>
            <label className='font-semibold'>I'm looking for a</label>
            <select className='text-[#8a8888] bg-white  rounded pr-6 pl-3 py-2 '>
              <option>Man</option>
              <option>Woman</option>
            </select>
          </div>
          <div className='flex flex-col text-white w-[113px] text-[1rem] '>
            <label className='font-semibold'>aged</label>
            <select className='text-[#8a8888] bg-white  rounded pr-6 pl-3 py-2 '>
                    <option value="">20</option>
                    <option value="">21</option>
                    <option value="" selected>22</option>
                    <option value="">23</option>
                    <option value="">24</option>
                    <option value="">25</option>
                    <option value="">26</option>
                    <option value="">27</option>
                    <option value="">28</option>
                    <option value="">29</option>
                    <option value="">30</option>
                    <option value="">31</option>
                    <option value="">32</option>
                    <option value="">33</option>
                    <option value="">34</option>
                    <option value="">35</option>
                    <option value="">36</option>
                    <option value="">37</option>
                    <option value="">38</option>
                    <option value="">39</option>
                    <option value="">40</option>
                    <option value="">41</option>
                    <option value="">42</option>
                    <option value="">43</option>
                    <option value="">44</option>
                    <option value="">45</option>
                    <option value="">46</option>
                    <option value="">47</option>
                    <option value="">48</option>
                    <option value="">49</option>
                    <option value="">50</option>
                    <option value="">51</option>
                    <option value="">52</option>
                    <option value="">53</option>
                    <option value="">54</option>
                    <option value="">55</option>
                    <option value="">56</option>
                    <option value="">57</option>
                    <option value="">58</option>
                    <option value="">59</option>
                    <option value="">60</option>
                    <option value="">61</option>
                    <option value="">62</option>
                    <option value="">63</option>
                    <option value="">64</option>
                    <option value="">65</option>
                    <option value="">66</option>
                    <option value="">67</option>
                    <option value="">68</option>
                    <option value="">69</option>
                    <option value="">70</option>
                    <option value="">71</option>
                    <option value="">72</option>
                    <option value="">73</option>
            </select>
          </div>
          <div className='text-white font-semibold flex justify-center items-end w-[40px] h-[45px]'>
          <span>to</span>
          </div>  

          <div className='flex flex-col text-white w-[113px] text-[1rem] '>
            <label className='font-semibold invisible'>aged</label>
            <select className='text-[#8a8888] rounded pr-6 pl-3 py-2 bg-white '>
                    <option value="">20</option>
                    <option value="">21</option>
                    <option value="" >22</option>
                    <option value="">23</option>
                    <option value="">24</option>
                    <option value="">25</option>
                    <option value="">26</option>
                    <option value="" selected>27</option>
                    <option value="">28</option>
                    <option value="">29</option>
                    <option value="">30</option>
                    <option value="">31</option>
                    <option value="">32</option>
                    <option value="">33</option>
                    <option value="">34</option>
                    <option value="">35</option>
                    <option value="">36</option>
                    <option value="">37</option>
                    <option value="">38</option>
                    <option value="">39</option>
                    <option value="">40</option>
                    <option value="">41</option>
                    <option value="">42</option>
                    <option value="">43</option>
                    <option value="">44</option>
                    <option value="">45</option>
                    <option value="">46</option>
                    <option value="">47</option>
                    <option value="">48</option>
                    <option value="">49</option>
                    <option value="">50</option>
                    <option value="">51</option>
                    <option value="">52</option>
                    <option value="">53</option>
                    <option value="">54</option>
                    <option value="">55</option>
                    <option value="">56</option>
                    <option value="">57</option>
                    <option value="">58</option>
                    <option value="">59</option>
                    <option value="">60</option>
                    <option value="">61</option>
                    <option value="">62</option>
                    <option value="">63</option>
                    <option value="">64</option>
                    <option value="">65</option>
                    <option value="">66</option>
                    <option value="">67</option>
                    <option value="">68</option>
                    <option value="">69</option>
                    <option value="">70</option>
                    <option value="">71</option>
                    <option value="">72</option>
                    <option value="">73</option>
            </select>
          </div>

          <div className='flex flex-col text-white w-[185px] text-[1rem] '>
            <label className='font-semibold'>of religion</label>
            <select className='text-[#8a8888] bg-white  rounded pr-6 pl-3 py-2 '>
              <option selected>Select</option>
              <option>Hindu</option>
              <option>Muslim</option>
              <option>Christian</option>
              <option>Sikh</option>
            </select>
          </div>
          <div className='flex flex-col text-white w-[268px] text-[1rem] '>
            <label className='font-semibold'>and mother tongue</label>
            <select className='text-[#8a8888] bg-white  rounded pr-6 pl-3 py-2  '>
              <option selected>Select</option>
              <optgroup label='Frequently Used' className='not-italic '>
                <option>Hindi</option>
                <option>Marathi</option>
                <option>Punjabi</option>
                <option>Bengali</option>
              </optgroup>
            </select>
          </div>
          <div className='flex justify-center items-center bg-red pt-5'>
            <div className='w-[175px] bg-[#53b9d2] text-white py-2 px-3 flex justify-center items-center rounded font-semibold'>Let's Begin</div>
          </div>
        </div>
    </div>
  )
}

export default HeaderContainer