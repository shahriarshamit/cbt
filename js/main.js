// js/main.js

$(function () {
    // Questions (15) - no "Qn - " prefixes
    const questions = [
        { text: "ভারী লোড নামানোর সময় কখন ব্যবহার করতে হবে?", options: ["ওজন", "প্রয়োজন অনুযায়ী বহনজন", "দুইজন", "কেউই না"], isTF: false },
        { text: "মালামাল পরিবহনের সময় আপনার ড্রপ বা ট্যাগ এক্সেল কখনোই নিচে নামিয়ে রাখবেন না।", options: ["সত্য", "মিথ্যা"], isTF: true },
        { text: "ম্যানুয়াল লোড করার সময় ওজন কীভাবে বহন করা উচিত?", options: ["ওজন সমানভাবে বহন করা", "শুধু একপাশে", "পিছনের দিকে বোঝা", "সামনের দিকে বোঝা"], isTF: false, image: "img/construction-vehicle.webp" },
        { text: "লোড করার সময় ট্রেনের বা গাড়ির চাকা কেন চেক বা ব্লক করা হয়?", options: ["গাড়িটা হঠাৎ করে ওঠা বা গড়িয়ে যাওয়া রোধ করতে", "টায়ারের হাওয়া চেক করার জন্য", "গাড়ি দ্রুত চালানোর জন্য", "গাড়ি সুন্দর দেখানোর জন্য"], isTF: false },
        { text: "ভারী মালামাল ওঠানোর সময় শরীরের কোন অংশ ব্যবহার করা নিরাপদ?", options: ["হাঁটু ভাঁজ করে সোজা পিঠ দিয়ে", "শুধু হাত", "কোমর বাঁকিয়ে", "ঘাড় দিয়ে"], isTF: false },
        { text: "মালামাল পরিবহনের সময় আপনার ড্রপ বা ট্যাগ এক্সেল কখনোই নিচে নামিয়ে রাখবেন না।", options: ["সত্য", "মিথ্যা"], isTF: true },
        { text: "বিপজ্জনক মালামাল লোড করার সময় কীভাবে চিনবেন?", options: ["বিশেষ সংকেত এবং লেবেল দেখে", "রঙ দেখে", "গন্ধ শুঁকে", "ওজন"], isTF: false, image: "img/under-construction.webp" },
        { text: "ধারণক্ষমতা ২০০০ কেজি হলে, কতটুকু ওজন তোলা নিরাপদ?", options: ["২০০০ কেজি বা তার কম", "যতটুকু ইচ্ছা", "২৫০০ কেজি", "৩০০০ কেজি"], isTF: false },
        { text: "লোডিং র‌্যাম্প ব্যবহারের প্রধান কারণ কী?", options: ["নিরাপদে মালামাল গাড়িতে ওঠানো-নামানোর জন্য", "বৃষ্টি থেকে বাঁচার জন্য", "ছবি তোলার জন্য", "গাড়ি থামানোর জন্য"], isTF: false },
        { text: "ট্রাকের পেছনে ফ্রেম থাকলে, ভারী পণ্য কোথায় রাখা উচিত?", options: ["হেডবোর্ডের সামনের কাছে", "যেখানে ইচ্ছা", "মাঝখানে", "দরজার কাছে"], isTF: false },
        { text: "প্যালেটগুলো বেডের ওপর একে অপরের সাথে লাগিয়ে রাখা উচিত যেন মাঝে কোনো ফাঁকা না থাকে।", options: ["সত্য", "মিথ্যা"], isTF: true },
        { text: "লোডিং/আনলোডিং কাজের সময় ব্যক্তিগত সুরক্ষা সরঞ্জাম বলতে কী বোঝায়?", options: ["হেলমেট, সেফটি জুতা, গ্লাভস ইত্যাদি", "শুধু গ্লাভস", "সাধারণ কাপড়", "হেলমেট, সেফটি জুতা, গ্লাভস ইত্যাদি"], isTF: false },
        { text: "লোড আনলোড করার সময় সবচেয়ে সাধারণ আঘাত কেন হয়?", options: ["ভুল পদ্ধতিতে ওজন ওঠানোর কারণে", "অতিরিক্ত পানি পানে", "রোদে কাজ করার", "দ্রুত হাঁটায়"], isTF: false },
        { text: "ট্রেইলারে ওঠার জন্য কোনটি ব্যবহার করা উচিত?", options: ["অনুমোদিত মই ব্যবহার করে", "লাফ দিয়ে", "প্যালেটের উপর দিয়ে", "টায়ারের উপর দিয়ে"], isTF: false },
        { text: "যাতায়াতের সময় কনভেয়র বেল্টের উপর একটি মাত্র স্ট্র্যাপ ব্যবহার করে কনভেয়রটি সঠিকভাবে সুরক্ষিত রাখা निश्चित करून।", options: ["সত্য", "মিথ্যা"], isTF: true },
    ];

    const TOTAL_Q = questions.length;

    // State
    let currentQ = 1;
    let answers = Array(TOTAL_Q).fill(null);
    const CANDIDATE_SECONDS = 2 * 60;
    const INSTRUCTION_SECONDS = 5 * 60;
    const EXAM_SECONDS = 30 * 60;
    const POST_FINISH_SECONDS = 2 * 60;
    let candidateRemaining = CANDIDATE_SECONDS;
    let instructionRemaining = INSTRUCTION_SECONDS;
    let examRemaining = EXAM_SECONDS;
    let postFinishRemaining = POST_FINISH_SECONDS;
    let candidateInterval = null;
    let instructionInterval = null;
    let examInterval = null;
    let postFinishInterval = null;
    let examStarted = false;

    // Ensure header progress exists
    const $headerRight = $('#exam-header .header-right');
    if ($headerRight.find('#exam-progress').length === 0) {
        $headerRight.prepend('<div id="exam-progress" class="progress-label text-white mr-3">অগ্রগতি 0%</div>');
    }

    // Helpers
    function pad(n) {
        return String(n).padStart(2, '0');
    }
    function formatTime(s) {
        if (s < 0) s = 0; const h = Math.floor(s / 3600), m = Math.floor((s % 3600) / 60), sec = s % 60; if (h > 0) return `${pad(h)}:${pad(m)}:${pad(sec)}`; return `${pad(m)}:${pad(sec)}`;
    }

    // Candidate timer
    function startCandidateTimer() {
        candidateRemaining = CANDIDATE_SECONDS;
        $('#candidate-timer').text(formatTime(candidateRemaining));
        if (candidateInterval) clearInterval(candidateInterval);
        candidateInterval = setInterval(() => {
            candidateRemaining--;
            $('#candidate-timer').text(formatTime(candidateRemaining));
            if (candidateRemaining <= 0) {
                clearInterval(candidateInterval);
                candidateInterval = null;
                goToResult('Candidate timeout');
            }
        }, 1000);
    }

    function startInstructionTimer() {
        instructionRemaining = INSTRUCTION_SECONDS;
        $('#timer-label').text('নির্দেশনার সময় অবশিষ্ট');
        $('#exam-timer').text(formatTime(instructionRemaining));
        if (instructionInterval) clearInterval(instructionInterval);
        instructionInterval = setInterval(() => {
            instructionRemaining--;
            $('#exam-timer').text(formatTime(instructionRemaining));
            if (instructionRemaining <= 0) {
                clearInterval(instructionInterval);
                instructionInterval = null;
                goToResult('Instruction time up');
            }
        }, 1000);
    }

    // Exam timer
    function startExamTimer(reset = true) {
        if (reset) {
            examRemaining = EXAM_SECONDS;
        }
        $('#exam-timer').text(formatTime(examRemaining));
        if (examInterval) clearInterval(examInterval);
        examInterval = setInterval(() => {
            examRemaining--;
            $('#exam-timer').text(formatTime(examRemaining));
            if (examRemaining <= 0) {
                clearInterval(examInterval);
                examInterval = null;
                goToResult('Exam time up');
            }
        }, 1000);
    }

    function startPostFinishTimer() {
        postFinishRemaining = POST_FINISH_SECONDS;
        $('#timer-label').text('সমাপ্তির সময় অবশিষ্ট');
        $('#exam-timer').text(formatTime(postFinishRemaining));
        if (postFinishInterval) clearInterval(postFinishInterval);
        postFinishInterval = setInterval(() => {
            postFinishRemaining--;
            $('#exam-timer').text(formatTime(postFinishRemaining));
            if (postFinishRemaining <= 0) {
                clearInterval(postFinishInterval);
                postFinishInterval = null;
                goToResult('Post-finish time up');
            }
        }, 1000);
    }

    // render options
    function renderOptions(qObj) {
        const $opts = $('.options');
        $opts.empty();
        qObj.options.forEach((optText, idx) => {
            const isTrueFalse = qObj.isTF === true;
            const choice = isTrueFalse ? (idx === 0 ? 'true' : 'false') : (['A', 'B', 'C', 'D'][idx] || String.fromCharCode(65 + idx));
            const displayText = optText;
            const $option = $(`
                    <div class="option d-flex align-items-center my-2" role="listitem" tabindex="0" data-choice="${choice}">
                        <div class="opt-label mr-3">${isTrueFalse ? '' : choice}</div>
                        <div class="opt-text p-2 flex-fill">${displayText}</div>
          </div>
        `);
            $opts.append($option);
        });
    }

    // load question and update subheader question number
    function loadQuestion(n) {
        currentQ = Math.max(1, Math.min(TOTAL_Q, Number(n)));
        const qObj = questions[currentQ - 1];
        if (!qObj) {
            return;
        }
        $('#question-text').text(qObj.text);
        const $questionImage = $('#question-image').empty();
        if (qObj.image) {
            $('<img>', {
                src: qObj.image,
                class: 'question-image-content'
            }).appendTo($questionImage);
        }
        renderOptions(qObj);
        $('.option').removeClass('selected').find('.opt-text').css('background', '').css('border', '3px solid #000');
        const prev = answers[currentQ - 1];
        if (prev) {
            $(`.option[data-choice="${prev}"]`).addClass('selected').find('.opt-text').css('background', '#f8e91b52').css('border', '3px solid #e0d425');
        }
        // Update subheader question number
        $('#sub-qno-num').text(currentQ);
    }

    function updateActiveNav() {
        $('.qnum').removeClass('active');
        $(`.qnum[data-q="${currentQ}"]`).addClass('active');
        $('.qnum').each(function () {
            const q = Number($(this).data('q'));
            if (answers[q - 1]) {
                $(this).addClass('answered').attr('aria-disabled', 'true').attr('tabindex', '-1').css('pointer-events', 'none');
            } else {
                $(this).removeClass('answered').removeAttr('aria-disabled').attr('tabindex', '0').css('pointer-events', 'auto');
            }
        });
    }

    function updateProgressUI() {
        const answered = answers.filter(a => a !== null).length;
        const percent = Math.round((answered / TOTAL_Q) * 100);
        $('#exam-progress').text(`অগ্রগতি ${percent}%`);
    }

    // Finish confirmation modal sequence
    function showFinishModal() {
        if ($('#finishModal').length === 0) {
            const html = `
        <div class="modal fade" id="finishModal" tabindex="-1" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header" style="background:#5ea0d6; color:#fff;">
                <h5 class="modal-title">সমাপ্ত হওয়া নিশ্চিত করুন</h5>
              </div>
              <div class="modal-body text-center" style="font-size:16px;">
                <div style="font-size:36px; color:#2b99d6; margin-bottom:10px;">?</div>
                <p>আপনি কি নিশ্চিত যে আপনি পরীক্ষা সমাপ্ত করতে চান?</p>
              </div>
              <div class="modal-footer d-flex justify-content-center" style="padding:20px;">
                <button type="button" class="btn btn-success mr-3" id="finish-yes"><i class="fa fa-check mr-2"></i>সমাপ্ত করুন</button>
                <button type="button" class="btn btn-success" data-dismiss="modal" id="finish-no"><i class="fa fa-times mr-2"></i>বাতিল করুন</button>
              </div>
            </div>
          </div>
        </div>`;
            $('body').append(html);
            $(document).on('click', '#finish-yes', function () {
                $('#finishModal').modal('hide');
                showSecondFinishModal();
            });
        }
        $('#finishModal').modal('show');
    }

    function showSecondFinishModal() {
        if ($('#secondFinishModal').length === 0) {
            const html = `
                <div class="modal fade" id="secondFinishModal" tabindex="-1" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            <div class="modal-header" style="background:#5ea0d6; color:#fff;">
                                <h5 class="modal-title">সমাপ্ত হওয়া নিশ্চিত করুন</h5>
                            </div>
                            <div class="modal-body text-center" style="font-size:16px;">
                                <div style="font-size:36px; color:#2b99d6; margin-bottom:10px;">?</div>
                                <p>আপনি যদি পরীক্ষার সমাপ্ত করার জন্য নির্বাচন করেন, আপনার উত্তর জমা দেওয়া হবে এবং আপনি পরীক্ষায় ফিরে আসতে পারবেন না</p>
                            </div>
                            <div class="modal-footer d-flex justify-content-center" style="padding:20px;">
                                <button type="button" class="btn btn-success" data-dismiss="modal" id="second-finish-no"><i class="fa fa-times mr-2"></i>বাতিল করুন</button>
                                <button type="button" class="btn btn-success mr-3" id="second-finish-yes"><i class="fa fa-check mr-2"></i>সমাপ্ত করুন</button>
                            </div>
                        </div>
                    </div>
                </div>`;
            $('body').append(html);
            $(document).on('click', '#second-finish-yes', function () {
                $('#secondFinishModal').modal('hide');
                showPostFinishScreen();
            });
        }
        $('#secondFinishModal').modal('show');
    }

    function showPostFinishScreen() {
        if (examInterval) {
            clearInterval(examInterval);
            examInterval = null;
        }
        examStarted = false;
        $('#instruction-area').addClass('d-none');
        $('#question-area').addClass('d-none');
        $('#finish-screen').addClass('d-none');
        $('#post-finish-screen').removeClass('d-none');
        $('#exam-sidebar').hide();
        $('#btn-prev').hide();
        $('#btn-next').hide();
        $('#instruction-continue-right').hide();
        startPostFinishTimer();
    }

    function showFinishScreen() {
        if (!$('#finish-screen').hasClass('d-none')) {
            return;
        }
        $('#instruction-area').addClass('d-none');
        $('#question-area').addClass('d-none');
        $('#finish-screen').removeClass('d-none');
        $('#exam-sidebar').show();
        $('#btn-prev').show();
        $('#btn-next').show();
        $('#btn-next').addClass('disabled');
    }

    // go to result
    function goToResult(reason) {
        if (candidateInterval) {
            clearInterval(candidateInterval);
            candidateInterval = null;
        }
        if (instructionInterval) {
            clearInterval(instructionInterval);
            instructionInterval = null;
        }
        if (examInterval) {
            clearInterval(examInterval);
            examInterval = null;
        }
        if (postFinishInterval) {
            clearInterval(postFinishInterval);
            postFinishInterval = null;
        }
        examStarted = false;
        $('#candidate-screen').addClass('d-none');
        $('#exam-screen').addClass('d-none');
        $('#result-screen').removeClass('d-none');
        console.log('Result due to:', reason);
    }

    // init UI
    function initUI() {
        $('#exam-screen').addClass('d-none');
        $('#instruction-area').addClass('d-none');
        $('#question-area').addClass('d-none');
        $('#finish-screen').addClass('d-none');
        $('#post-finish-screen').addClass('d-none');
        $('#exam-sidebar').hide();
        $('#exam-footer').hide();
        $('#btn-prev').hide();
        $('#btn-next').hide();
        updateProgressUI();
        loadQuestion(currentQ);
    }

    // Events

    // Candidate confirm -> show instruction screen
    $('#btn-confirm').on('click', function () {
        if (candidateInterval) { clearInterval(candidateInterval); candidateInterval = null; }
        $('#candidate-screen').addClass('d-none');
        $('#exam-screen').removeClass('d-none').addClass('instruction-mode');
        $('#instruction-area').removeClass('d-none');
        $('#question-area').addClass('d-none');
        $('#exam-sidebar').hide();
        $('#exam-footer').show();
        $('#btn-prev').hide();
        $('#btn-next').hide();
        startInstructionTimer();
    });

    // Candidate cancel
    $('#btn-cancel').on('click', function () {
        location.reload();
    });

    // Instruction continue -> start exam
    $(document).on('click', '#instruction-continue-right, #btn-start-from-instruction', function () {
        if (instructionInterval) {
            clearInterval(instructionInterval);
            instructionInterval = null;
        }
        $('#exam-screen').removeClass('instruction-mode');
        $('#instruction-area').addClass('d-none');
        $('#question-area').removeClass('d-none');
        $('#finish-screen').addClass('d-none');
        $('#timer-label').text('পরীক্ষার সময় অবশিষ্ট');
        $('#exam-sidebar').show();
        $('#exam-footer').show();
        $('#btn-prev').show();
        $('#btn-next').show();
        $('#instruction-continue-right').hide();

        examStarted = true;
        startExamTimer();
        updateProgressUI();
        loadQuestion(currentQ);
        $('#exam-main').scrollTop(0);
    });

    // Sidebar nav (ignore clicks on already answered items)
    $(document).on('click', '.qnum', function (e) {
        if ($(this).attr('aria-disabled') === 'true') {
            e.preventDefault();
            return;
        }
        e.preventDefault();
        const q = Number($(this).data('q'));
        if (!isNaN(q)) {
            loadQuestion(q);
        }
    });

    // Next/Prev
    $('#btn-next').on('click', function () {
        if (!examStarted) {
            return;
        }
        if (currentQ < TOTAL_Q) {
            loadQuestion(currentQ + 1);
        } else {
            showFinishScreen();
        }
    });
    $('#btn-prev').on('click', function () {
        if (!examStarted) {
            return;
        }
        if (!$('#finish-screen').hasClass('d-none')) {
            $('#finish-screen').addClass('d-none');
            $('#question-area').removeClass('d-none');
            $('#exam-sidebar').show();
            $('#timer-label').text('পরীক্ষার সময় অবশিষ্ট');
            startExamTimer(false);
            loadQuestion(currentQ);
            return;
        }
        if (currentQ > 1) {
            loadQuestion(currentQ - 1);
        }
    });

    // Option selection
    $(document).on('click', '.option', function () {
        if (!examStarted) return;
        const $opt = $(this);
        $('.option').removeClass('selected').find('.opt-text').css('background', '').css('border', '3px solid #000000');
        $opt.addClass('selected').find('.opt-text').css('background', '#f8e91b52').css('border', '3px solid #e0d425');
        const choice = $opt.attr('data-choice');
        answers[currentQ - 1] = choice || null;
        // mark nav item answered and disable it
        const $navItem = $(`.qnum[data-q="${currentQ}"]`);
        $navItem.addClass('answered').attr('aria-disabled', 'true').attr('tabindex', '-1').css('pointer-events', 'none');
        updateActiveNav();
        updateProgressUI();
    });

    // End exam
    $('#btn-finish').on('click', function (e) {
        e.preventDefault();
        if (!$('#post-finish-screen').hasClass('d-none')) {
            goToResult('User finished');
        } else if ($('#finish-screen').hasClass('d-none')) {
            showFinishScreen();
        } else {
            showFinishModal();
        }
    });

    // Initialization & start candidate timer
    initUI();
    startCandidateTimer();
    console.log('Ready: candidate timer started; headers updated. Subheader question number will change on navigation.');

    // Debug exposure
    window._exam = { questions, answers };
});