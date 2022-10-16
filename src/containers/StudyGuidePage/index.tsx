/**
 * Copyright (c) Bohdan Shtepan.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { sanitize } from 'dompurify';
import { Hero } from '../../components';
import { buildTitle } from '../../core/helpers';
import { l } from '../../core/localization';

import './index.scss';

export default function StudyGuidePage() {
    return (
        <>
            <Helmet>
                <title>{buildTitle(l('Study Guide'))}</title>
            </Helmet>

            {/* Hero */}
            <Hero title={l('Study Guide hero title')} />

            <div className='container-lg'>
                <div className='row'>
                    <div className='col-12 text-center'>
                        <br />
                        <p dangerouslySetInnerHTML={{ __html: sanitize(l('Study Guide description')) }}></p>
                        <br />
                    </div>
                    <div className='d-none d-md-flex col-md-3'>
                        <nav id='navbar-example3' className='h-100 flex-column align-items-stretch pe-4 border-end'>
                            <nav className='nav nav-pills flex-column'>
                                <a className='nav-link' href='#item-1'>1. Prerequisite</a>
                                <nav className='nav nav-pills flex-column'>
                                    <a className='nav-link ms-3 my-1' href='#item-1-1'>
                                        <i className='fa-solid fa-square-root-variable'></i> Math
                                    </a>
                                    <a className='nav-link ms-3 my-1' href='#item-1-2'>
                                        <i className='fa-solid fa-code'></i> Programming Languages
                                    </a>
                                    <a href='#item-1-3' className='nav-link ms-3 my-1'>
                                        <i className='fa-solid fa-compass-drafting'></i> Software Engineering
                                    </a>
                                </nav>
                                <a className='nav-link' href='#item-2'>2. Algorithms & Data Structures</a>
                                <nav className='nav nav-pills flex-column'>
                                    <a className='nav-link ms-3 my-1' href='#item-2-1'>
                                        <i className='fa-solid fa-microchip'></i> Basics
                                    </a>
                                    <a className='nav-link ms-3 my-1' href='#item-2-2'>
                                        <i className='fa-solid fa-microscope'></i> Deep dive
                                    </a>
                                </nav>
                                <a className='nav-link' href='#item-3'>3. Systems Design</a>
                                <nav className='nav nav-pills flex-column'>
                                    <a className='nav-link ms-3 my-1' href='#item-3-1'>
                                        <i className='fa-solid fa-server'></i> Basics
                                    </a>
                                    <a className='nav-link ms-3 my-1' href='#item-3-2'>
                                        <i className='fa-solid fa-network-wired'></i> Deep Dive
                                    </a>
                                </nav>
                                <a className='nav-link' href='#item-4'>4. Leadership</a>
                                <nav className='nav nav-pills flex-column'>
                                    <a href='#item-4-1' className='nav-link ms-3 my-1'>
                                        <i className='fa-solid fa-people-group'></i> Basics
                                    </a>
                                </nav>
                                <a className='nav-link' href='#item-5'>5. Site Reliability Engineering</a>
                                <nav className='nav nav-pills flex-column'>
                                    <a className='nav-link ms-3 my-1' href='#item-5-1'>
                                        <i className='fa-brands fa-linux'></i> Operating Systems
                                    </a>
                                    <a className='nav-link ms-3 my-1' href='#item-5-2'>
                                        <i className='fa-solid fa-ethernet'></i> Networking
                                    </a>
                                </nav>
                                <a className='nav-link' href='#item-6'>6. Extra Curriculum</a>
                            </nav>
                        </nav>
                    </div>

                    <div className='col-md-9'>
                        <div data-bs-spy='scroll' data-bs-target='#navbar-example3' data-bs-smooth-scroll='true' tabIndex={0}>
                            <div id='item-1'>
                                <h3>1. Prerequisite</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quia non voluptate maiores pariatur earum similique saepe debitis repudiandae numquam nulla aliquam inventore, reiciendis cupiditate voluptatibus unde sit odio officia!</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quia non voluptate maiores pariatur earum similique saepe debitis repudiandae numquam nulla aliquam inventore, reiciendis cupiditate voluptatibus unde sit odio officia!</p>
                            </div>
                            <div id='item-1-1'>
                                <h4>
                                    <i className='fa-solid fa-square-root-variable'></i> Math
                                </h4>
                                <a href='#'>📚 Discrete Mathematics and Its Applications by Kenneth Rosen</a>
                                <br />
                                <a href='#'>📚 Discrete Mathematics with Combinatorics by James Anderson and James Bell</a>
                                <br />
                                <a href='#'>📚 Applied Combinatorics by Mitchel T. Keller and William T. Trotter</a>
                                <br />
                                <a href='#'>📚 Introduction to Linear Algebra by Gilbert Strang</a>
                                <br />
                                <a href='#'>📼 Discrete Math 1 by TrevTutor</a>
                                <br />
                                <a href='#'>📼 Discrete Math 2 by TrevTutor</a>

                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet impedit nihil beatae provident ullam dolorem laudantium magnam voluptatibus soluta modi similique mollitia eos odio id tenetur blanditiis doloribus, nemo sequi?</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet impedit nihil beatae provident ullam dolorem laudantium magnam voluptatibus soluta modi similique mollitia eos odio id tenetur blanditiis doloribus, nemo sequi?</p>
                            </div>
                            <div id='item-1-2'>
                                <h4>
                                    <i className='fa-solid fa-code'></i> Programming Langugages
                                </h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore possimus hic, fugit dolore accusamus quasi optio iure a vero reiciendis voluptas harum explicabo, veniam dolorum asperiores sed atque. Quos, fugiat!</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore possimus hic, fugit dolore accusamus quasi optio iure a vero reiciendis voluptas harum explicabo, veniam dolorum asperiores sed atque. Quos, fugiat!</p>
                            </div>
                            <div id='item-1-3'>
                                <h4>
                                    <i className='fa-solid fa-compass-drafting'></i> Software Engineering
                                </h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur ex iure numquam earum in praesentium. Itaque animi minima consectetur ratione nam quam, explicabo recusandae totam quo debitis ad veniam architecto!</p>
                            </div>

                            <div id='item-2'>
                                <br />
                                <h3>2. Algorithms & Data Structures</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam eligendi voluptatem ipsam excepturi, atque quidem reprehenderit repudiandae sunt quibusdam, beatae dolorum omnis nihil perferendis soluta. Aut consequuntur praesentium eos animi.</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam eligendi voluptatem ipsam excepturi, atque quidem reprehenderit repudiandae sunt quibusdam, beatae dolorum omnis nihil perferendis soluta. Aut consequuntur praesentium eos animi.</p>
                            </div>
                            <div id='item-2-1'>
                                <h4>
                                    <i className='fa-solid fa-microchip'></i> Basics
                                </h4>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia tenetur fugiat illum autem sequi! Eos ullam porro sint voluptates quos vitae optio officia eligendi dolores? Fugiat quisquam accusantium architecto illo!</p>
                            </div>
                            <div id='item-2-2'>
                                <h4>
                                    <i className='fa-solid fa-microscope'></i> Deep dive
                                </h4>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia tenetur fugiat illum autem sequi! Eos ullam porro sint voluptates quos vitae optio officia eligendi dolores? Fugiat quisquam accusantium architecto illo!</p>
                            </div>

                            <div id='item-3'>
                                <br />
                                <h3>3. Systems Design</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, nihil dolores voluptas nam, doloribus dolor deleniti, nostrum sed ducimus incidunt dolorum quia tempora sit soluta sunt natus! Dicta, quaerat laudantium!</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, nihil dolores voluptas nam, doloribus dolor deleniti, nostrum sed ducimus incidunt dolorum quia tempora sit soluta sunt natus! Dicta, quaerat laudantium!</p>
                            </div>
                            <div id='item-3-1'>
                                <h4>
                                    <i className='fa-solid fa-server'></i> Basics
                                </h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quasi esse quod eum soluta, nostrum nisi laboriosam debitis minima, aut veritatis deleniti nobis? At voluptatum aliquam perspiciatis recusandae temporibus magnam!</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quasi esse quod eum soluta, nostrum nisi laboriosam debitis minima, aut veritatis deleniti nobis? At voluptatum aliquam perspiciatis recusandae temporibus magnam!</p>
                            </div>
                            <div id='item-3-2'>
                                <h4>
                                    <i className='fa-solid fa-network-wired'></i> Deep Dive
                                </h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam provident alias error maxime animi reiciendis mollitia id, fugit quasi, ratione nihil dolores laudantium distinctio natus architecto fuga excepturi dicta. Corrupti.</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam provident alias error maxime animi reiciendis mollitia id, fugit quasi, ratione nihil dolores laudantium distinctio natus architecto fuga excepturi dicta. Corrupti.</p>
                            </div>

                            <div id='item-4'>
                                <br />
                                <h3>4. Leadership</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, nihil dolores voluptas nam, doloribus dolor deleniti, nostrum sed ducimus incidunt dolorum quia tempora sit soluta sunt natus! Dicta, quaerat laudantium!</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, nihil dolores voluptas nam, doloribus dolor deleniti, nostrum sed ducimus incidunt dolorum quia tempora sit soluta sunt natus! Dicta, quaerat laudantium!</p>
                            </div>
                            <div id='item-4-1'>
                                <h4>
                                    <i className='fa-solid fa-people-group'></i> Basics
                                </h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quasi esse quod eum soluta, nostrum nisi laboriosam debitis minima, aut veritatis deleniti nobis? At voluptatum aliquam perspiciatis recusandae temporibus magnam!</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quasi esse quod eum soluta, nostrum nisi laboriosam debitis minima, aut veritatis deleniti nobis? At voluptatum aliquam perspiciatis recusandae temporibus magnam!</p>
                            </div>

                            <div id='item-5'>
                                <br />
                                <h3>5. Site Reliability Engineering</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, nihil dolores voluptas nam, doloribus dolor deleniti, nostrum sed ducimus incidunt dolorum quia tempora sit soluta sunt natus! Dicta, quaerat laudantium!</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, nihil dolores voluptas nam, doloribus dolor deleniti, nostrum sed ducimus incidunt dolorum quia tempora sit soluta sunt natus! Dicta, quaerat laudantium!</p>
                            </div>
                            <div id='item-5-1'>
                                <h4>
                                    <i className='fa-brands fa-linux'></i> Operating Systems
                                </h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quasi esse quod eum soluta, nostrum nisi laboriosam debitis minima, aut veritatis deleniti nobis? At voluptatum aliquam perspiciatis recusandae temporibus magnam!</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quasi esse quod eum soluta, nostrum nisi laboriosam debitis minima, aut veritatis deleniti nobis? At voluptatum aliquam perspiciatis recusandae temporibus magnam!</p>
                            </div>
                            <div id='item-5-2'>
                                <h4>
                                    <i className='fa-solid fa-ethernet'></i> Networking
                                </h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam provident alias error maxime animi reiciendis mollitia id, fugit quasi, ratione nihil dolores laudantium distinctio natus architecto fuga excepturi dicta. Corrupti.</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam provident alias error maxime animi reiciendis mollitia id, fugit quasi, ratione nihil dolores laudantium distinctio natus architecto fuga excepturi dicta. Corrupti.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
